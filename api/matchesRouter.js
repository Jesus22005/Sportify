const express = require("express");
const Match = require("../models/matches");
const User = require("../models/User");
const Location = require("../models/locations")
const Sport = require("../models/Sports")
const MatchesRouter = express.Router();
const tokenAuth = require("../middleware/tokenAuth")




MatchesRouter.post("/newMatch", tokenAuth, async (req, res) =>{

    const {sport, jugadores, cupos, date, hora ,  lugar} = req.body
    
    const user = req.user.id;
    let match = new Match({
        sport,
        jugadores,
        cupos,
        date,
        hora,
        lugar,
        user,
        
    })

    if (!sport  || !date || !hora  || !lugar  ) {
        return res.status(400).json({
            success: false,
            message: "Faltan datos por completar"
        })
    }


    let newMatch = await match.save()

    let newPartido = await User.findByIdAndUpdate(user, {

        
        $push:{ partidos: newMatch},
    
        
      });
    
    return res.status(200).json({
        success: true,
        match : newMatch,
        message:"Partido creado correctamente"
    })


   

})

MatchesRouter.get("/sportify-matches" , async (req, res)=>{

    let partidos = await Match.find({}).populate("sport", "deporte").populate("user", "nombre").populate("lugar", ["nombre",  "direccion" ,"contacto"] ).populate("precio",  "precio").populate("inscritos", ["nombre", "nombreUsuario"]);
   
    return res.status(200).json({
        success: true,
        partidos,
        
    })


} )


MatchesRouter.get("/sportify-matches/:id", async (req, res)=>{

    const
        { id
    } = req.params

       
    try {
        
        let matchesName = await Match.findById(id).populate("sport", "deporte").populate("user", "nombre").populate("lugar", ["nombre",  "direccion" ,"contacto"] ).populate("precio",  "precio");
        
       


        res.status(200).json({
            success: true,
            matchesName
        })

        
    } 
    catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }

})


MatchesRouter.put("/updateMatch/:id", tokenAuth, async (req, res) =>{ 
    try{
    

    
  
    const {date, hora, lugar, inscritos} = req.body

    const user = await User.findById(req.user.id)
    if(!user) return res.status(400).json({
        success:false,
        message:"Registrese para modificar un partido"
    })
    
    if(!date|| !hora || !lugar  ){return res.status(400).json({
        success:false,
        message:"Ingrese datos"
    }) } 
    
    await Match.findOneAndUpdate({_id:req.params.id}, {
        date,
        hora, 
        lugar,
        inscritos
        })
        
        res.status(200).json({
            success: true,
            message: "Partido actualizado"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })}

})


MatchesRouter.delete("/deleteMatch/id", tokenAuth,  async (req, res) =>{
    try {
       

        const {id} = req.body


        const user = await User.findById(req.user.id)
    if(!user) return res.status(400).json({
        success:false,
        message:"Registrese para modificar un partido"
    })

    
       
    let deleteMatch = await User.findByIdAndUpdate(user, {
        $pull:{ partidos: id._id,},
        
      });
        await Match.findOneAndDelete({id})
        res.status(200).json({
            success:true,
            message:"Partido borrado correctamente!"
        }) 

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
        
    }
})

module.exports = MatchesRouter;





















// MatchesRouter.post("/newMatch/:lugarId", tokenAuth, async (req, res) =>{

//     try {
//         const user = req.user.id;
//         const { lugarId } = req.params;
//         const { sportId, inscritos, date, hora } = req.body;

//         // console.log(req.body)

//         if (!sportId || !inscritos || !date || !hora) {
//             return ({
//                 status: 403,
//                 message: "Por favor, introduce todos los datos"
//             })
//         }

//         let fecha = new Date(date);
//         let location = await Location.findById(lugarId);
        
//         if (!location) {
//             return ({
//                 status: 403,
//                 message: "Este campo no existe"
//             })
//         };

//         let deportes = location.deporte.find(partido => {
//             return partido.deportes.equals(sportId)
//         });

//         if (!deportes) {
//             return ({
//                 status: 403,
//                 message: "Este deporte no existe en este estadio"
//             })
//         };

//         let todayRent= await Match.find({lugar: lugarId, date: fecha, status: "libre"});

//         todayRent.forEach(match =>{
//             let deporte = match.sport._id.equals(sportId)
//             if(inscritos > deporte.participantes){
//                 return ({
//                     status: 403,
//                     message:"No quedan plazas disponibles"
//                 })
//             } else {
//                 deporte.participantes -= inscritos
//             }
            
//         })



//         const crearReserva = new Rental({
//             user,
//             lugar: lugarId,
//             sport: sportId,
//             inscritos,
//             date: fecha,
//             status: "reservado"
//         });

//         let nuevaReserva = await crearReserva.save();
//         await location.save()
//         return res.json({
//             success: true,
//             nuevaReserva
//         });

//     }
//     catch (err) {
//         return ({
//             status: 500,
//             message: err.message

//         })
//     };
// } )