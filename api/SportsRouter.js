const express = require("express");
const Sport = require("../models/Sports")
const SportsRouter = express.Router();
const User = require("../models/User");
const adminAuth = require("../middleware/adminAuth");
const tokenAuth = require("../middleware/tokenAuth")


SportsRouter.post("/newSport", tokenAuth , adminAuth, async (req, res) =>{

    const {deporte,  equipacion } = req.body
    let sport = new Sport({
        deporte,
        equipacion,
        
    })

    const findSport= await Sport.findOne({deporte})

    if (findSport) res.status(400).json({
        succes : false,
        message: "El deporte ya existe"
    })

    if (!deporte || !equipacion  ) {
        return res.status(400).json({
            success: false,
            message: "Faltan datos por completar"
        })
    }

    

    let newSport = await sport.save({_id:req.user.id})
    return res.status(200).json({
        success: true,
        sport : newSport,
        message: "Deporte Creado Correctamente"
    })


   

})

SportsRouter.get("/sportify-sports" , async (req, res)=>{

    let deportes = await Sport.find({})
    
    // .populate("lugar", "nombre" ).populate("precio" ,"precio")

    return res.status(200).json({
        success: true,
        deportes
    })


} )




SportsRouter.put("/updateSport/:id", tokenAuth, adminAuth,  async (req, res) =>{ 
    try{
    const {id} = req.params
    const user = req.user.id;
    const { equipacion} = req.body

    
    if( !equipacion){return res.status(400).json({
        success:false,
        message:"Ingrese datos"
    }) } 
    
      await Sport.findByIdAndUpdate( id, {
        
        equipacion
        })
        
        res.status(200).json({
            success: true,
            message: "Deporte actualizado"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })}

})

SportsRouter.delete("/deleteSport/id", tokenAuth, adminAuth, async (req, res) =>{
    try {
        const {id} = req.body;
        const user = req.user.id;

        if(!id){return res.status(400).json({
            success:false,
            message:"Ingrese datos"
        })}

        await Sport.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"Deporte borrado correctamente!"
        }) 

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
        
    }
})


module.exports = SportsRouter;




















// SportsRouter.get("/sportify-sports/:id", async (req, res)=>{

//     const
//         { id
//     } = req.params

       
//     try {
        
//         let sportName = await Sport.findOne({id}).populate("lugar", "nombre" ).populate("precio" ,"precio")
        
//         if(!sportName){return res.status(400).json({
//             success:false,
//             message:"Ingrese Deporte"
//         }) } 


//         res.status(200).json({
//             success: true,
//             sportName
//         })

        
//     } 
//     catch (err) {
//         return res.status(500).json({
//             success: false,
//             message: err.message
//         })
//     }

// })