const express = require("express");
const Location = require("../models/locations")
const LocationsRouter = express.Router();
const User = require("../models/User");
const adminAuth = require("../middleware/adminAuth");
const tokenAuth = require("../middleware/tokenAuth")


LocationsRouter.post("/newLocation",tokenAuth , adminAuth, async (req,res) => {

    const {nombre, deporte,  precio, direccion, contacto} = req.body

    let location = new Location({
        nombre,
        deporte,
        precio,
        direccion,
        contacto,
       
    })

    const findLocation= await Location.findOne({nombre})

    if (findLocation) res.status(400).json({
        succes : false,
        message: "La ubicacion ya existe"
    })

    if (!nombre || !deporte  || !precio || !direccion ||!contacto   ) {
        return res.status(400).json({
            success: false,
            message: "Faltan datos por completar"
        })
    }

    let newLocation = await location.save({_id:req.user.id})
    return res.status(200).json({
        success: true,
        match : newLocation
    })

})

LocationsRouter.get("/sportify-locations" , async (req, res)=>{

    let ubicacion = await Location.find({});

    return res.status(200).json({
        success: true,
        ubicacion
    })


} )





LocationsRouter.put("/updateLocation/id", tokenAuth, adminAuth, async (req, res) =>{ 
    try{
    const {id} = req.body
    const user = req.user.id;
    

    
  
    const {  precio , direccion , contacto} = req.body

    
    if( !precio || !direccion || !contacto ){return res.status(400).json({
        success:false,
        message:"Ingrese todos los  datos"
    }) } 
    
      await Location.findOneAndUpdate(id, {
        precio, 
        direccion,
        contacto,
        
        })
        
        res.status(200).json({
            success: true,
            message: "Ubicacion actualizada"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })}

    })
    LocationsRouter.delete("/deleteLocation/id", tokenAuth, adminAuth, async (req, res) =>{
            try {
                const {id} = req.body;
                const user = req.user.id;
        
                if(!id){return res.status(400).json({
                    success:false,
                    message:"Ingrese datos"
                })}
        
                await Location.findByIdAndDelete(id)
                res.status(200).json({
                    success:true,
                    message:"Ubicacion borrada correctamente!"
                }) 
        
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message
                })
                
            }
        })





module.exports = LocationsRouter;



















// LocationsRouter.get("/sportify-locations/:id", async (req, res)=>{

//     const
//         { id
//     } = req.params

       
//     try {
        
//         let locationsName = await Location.findById(id).populate("deporte");
        
       


//         res.status(200).json({
//             success: true,
//             locationsName
//         })

        
//     } 
//     catch (err) {
//         return res.status(500).json({
//             success: false,
//             message: err.message
//         })
//     }

// })