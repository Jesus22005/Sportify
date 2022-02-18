const express = require("express");
const User = require("../models/User")
const Match = require("../models/matches")
const Booking = require("../models/booking")
const Sport= require("../models/Sports")
const UserRouter = express.Router();
const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken")
const tokenAuth = require("../middleware/tokenAuth");
const MatchesRouter = require("./matchesRouter");

UserRouter.post("/newUser", async (req, res) =>{

    const {nombre, apellidos, nombreUsuario, clave, edad, genero, localidad, email,  descripcion } = req.body
    

    const findUser = await User.findOne({email, nombreUsuario})
    
    if (findUser) return res.status(400).json({
        success:false,
        message:"El email o el UserName introducido ya existe"
    }) 

    if (!nombre || !apellidos || !nombreUsuario || !edad || !genero || !localidad  || !email|| !descripcion) {
        return res.status(400).json({
            success: false,
            message: "Faltan datos por completar"
        })
    }

    if (edad > 115 || edad < 16) {
        return res.status(400).json({
            success: false,
            message: "Debes ser mayor de 16 años para poder registrarte."
        })

    }

    if (nombre.length < 2 || apellidos.length < 2 || nombreUsuario.length < 2) {
        return res.status(400).json({
            success: false,
            message: "Los nombres, apellidos y usuarios deben contener más de 2 caracteres"
        })
    }

   

    // if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,3})$/.test(email)))return res.status(400).json({
    //     success: false,       
    //     message: "Indique un correo electronico valido"
    //  })


     if((email.length < 6) || (email.length > 30) || (email.search("@") < 0)||(email.search(/[.]/) < 0)) {
        return res.json({
            success: false,
            message: "Indique un correo electronico valido"
        })}


     if ((clave.length < 8) || (clave.search(/[a-z]/i) < 0) || (clave.search(/[0-9]/) < 0) || (clave.search(/[A-Z]/) < 0)) {
        return res.json({
            success: false,
            message: "La contraseña tiene que tener un mínimo de ocho carácteres, incluyendo una mayúscula, una minúscula y un número "
        })}

    // if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(clave))) return res.status(400).json({
    //     success: false,       
    //     message: "La clave debe tener mínimo ocho caracteres, al menos una letra y un número:"
    //  })

     if (descripcion.length > 60) {

        return res.status(400).json({
            success: false,
            message: "Describete en 60 caracteres."

     })}

     let claveHash = bcrypt.hashSync(clave, salt);

     let user = new User({
        nombre,
        apellidos,
        nombreUsuario,
        clave: claveHash,
        edad,
        genero,
        localidad,
        email,
        descripcion,
        
        
    })

    let newUser = await user.save()

    const accessToken = createAccessToken({id:newUser._id})

    return res.status(200).json({
        success: true,
        accessToken,
        user : newUser,

        message:"Usuario creado correctamente"

    })


})


UserRouter.post("/login", async (req, res)=>{
    try {
        const{email, clave} = req.body
        const findUser = await User.findOne({email})
        if(!findUser) return res.status(400).json({
            success:false,
            message:"Este usuario no existe/ no está registrado"
        })
        const role = findUser.role;
        const passwordOk = await bcrypt.compare(clave, findUser.clave)
        if(!passwordOk) return res.status(400).json({
            success:false,
            message:"Contraseña incorrecta!"})

        const accessToken = createAccessToken({id:findUser._id})
        

        return res.status(200).json({
            accessToken,
            role,
            success:true,
            message:"Usuario logueado correctamente"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        }) 
    }
})


UserRouter.get("/sportify-users", async (req, res)=>{

    let usuarios = await User.find({}).populate("deportesFavoritos","deporte").populate("partidos", ["date", "hora"," lugar",["sport","deporte"]]).populate("reservas"["_id", "partido"])
    
    
    

    return res.status(200).json({
        success: true,
       
        usuarios
    })


} )


UserRouter.get("/sportify-users/id", tokenAuth, async (req, res)=>{

    // // const
         const {id} = req.user  ;

       
    try {
        
        let userName = await User.findById({_id:req.user.id}).populate("deportesFavoritos","deporte").populate("partidos",["date", "hora"," lugar", "sport"]).populate("reservas", "partido");
        
        let partidosUser = await User.find({partidos:req.user.id})

        if(!userName){return res.status(400).json({
            success:false,
            message:"Ingrese Usuario"
        }) } 

        let buscarPartidos = await Match.find({user:id}).populate("sport").populate("lugar")
        let buscarReservas = await Booking.find({usuario:id}).populate("partido").populate("usuario")
      

        let filtro = buscarPartidos.filter(item => item.id)

        res.status(200).json({
            success: true,
            userName,
            partidosUser,
            buscarPartidos,
            filtro,
            buscarReservas
        })

        
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

})


UserRouter.put("/updateUser", tokenAuth, async (req, res) =>{ 
    try{
   
    
  
    const {email, descripcion, clave} = req.body

    const user = await User.findById(req.user.id)
    if(!user) return res.status(400).json({
        success:false,
        message:"Este usuario no existe/ no está registrado"
    })
    
    if(!email|| !descripcion || !clave){return res.status(400).json({
        success:false,
        message:"Ingrese datos"
    }) } 
    let claveHash = bcrypt.hashSync(clave, salt);
      await User.findOneAndUpdate({_id:req.user.id}, {
        email: email,
        descripcion: descripcion,
        clave: claveHash,
        })
        
        res.status(200).json({
            success: true,
            message: "Usuario actualizado"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })}

})


UserRouter.delete("/deleteUser", tokenAuth,  async (req, res) =>{
    try {
        // const {id} = req.params;

        if(!{_id:req.user.id}){return res.status(400).json({
            success:false,
            message:"Ingrese datos"
        })}

        await User.findOneAndDelete({_id:req.user.id})
        res.status(200).json({
            success:true,
            message:"Usuario borrado correctamente!"
        }) 

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
        
    }
})


const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:"7d"})
}

module.exports = UserRouter;