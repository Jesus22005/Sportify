const express = require("express");
const Booking = require("../models/booking")
const BookingsRouter = express.Router();
const User = require("../models/User");
const Match = require("../models/matches")
const adminAuth = require("../middleware/adminAuth");
const tokenAuth = require("../middleware/tokenAuth");
const booking = require("../models/booking");
const { isValidObjectId } = require("mongoose");




BookingsRouter.post("/newBooking",tokenAuth,   async (req, res) =>{ 

    
    const {partidoId}  = req.body

   
   try{
    
    const user = req.user.id;
 
    let  inscritos = [] 
    
    let findPartido = await Match.findById(partidoId);
    console.log("findPartido.inscritos",findPartido.inscritos)
    
    if (!findPartido){
        return res.json({
            success: false,
            message: "No hay partido"
        });
    };
 if (findPartido.inscritos.length > findPartido.jugadores){
        return res.status(400).json({
            success: false,
            message: "No hay mas cupos"
        })
        
    } 
   
    await inscritos.push(user)
       
   

    let booking = new Booking({
        usuario : user,
        partido: partidoId,
        
    })

    

    if (findPartido.jugadores <= findPartido.inscritos.length){

        return res.json({
            success: false,
            message: "Partido Lleno"

            
        })
    }
   

    
    let newBooking = await booking.save();
    let inscritoos =  await Match.find(partidoId.jugadores)

    
    // let newReserva = await User.findByIdAndUpdate(user, {

        
    //     $push: { reservas: newBooking,

    //     },
    
        
    //   });



    let newInscrito = await Match.findByIdAndUpdate(partidoId, {

        cupos: findPartido.cupos - 1,
        $push: { inscritos: user,

           
            
        },
    
        
      });

     

   
    return res.json({
        success: true,
        booking : newBooking,
        message:"Reserva Creada"
          
        
        
    })} catch (error) {
        return res.json({
            success: false,
            message: error.message
        }) 
    }


})


BookingsRouter.get("/sportify-bookings" , async (req, res)=>{

    let bookings = await Booking.find({}).populate("usuario","nombre").populate("partido", ["sport"  , "deporte", "lugar","nombre", "hora", "date"] )
    
    // .populate("lugar", "nombre" ).populate("precio" ,"precio")

    return res.status(200).json({
        success: true,
        bookings
        

    })

})
    


BookingsRouter.get("/sportify-bookings/id", tokenAuth, async (req, res)=>{

    // // const
        const {usuario} = req.user  ;


       
    try {
        
        let bookingsId = await Booking.findById({_id:req.user.id }).populate("usuario","nombre").populate("partido", ["sport"  , "deporte", "lugar","nombre", "hora", "date","inscritos"]);
        
        // if(!bookingsId){return res.status(400).json({
        //     success:false,
        //     message:"Ingrese Usuario"
        // }) } 


        res.status(200).json({
            success: true,
            bookingsId
        })

        
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

})









BookingsRouter.delete("/deleteBooking", tokenAuth,  async (req, res) =>{
        try {
           
    
            const {id} = req.body;
            const user = req.user.id;
    

            const findBooking = await Booking.findById(id)

            if(!findBooking){return res.status(400).json({
                success:false,
                message:"La reserva no existe."
            })}
           
            if(!id){return res.status(400).json({
                success:false,
                message:"Ingrese datos"
            })}

            let deleteMatch = await Match.findByIdAndUpdate(id, {
                $pull:{inscritos: user},
                
              });
           
            let deleteBooking = await User.findByIdAndUpdate(user, {
                $pull:{reservas: id},
                
              });
            
            await Booking.findByIdAndDelete(id)
            res.status(200).json({
                success:true,
                message:"Reserva borrada correctamente!"
            }) 
    
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            })
            
        }

} )


module.exports = BookingsRouter;









// try {
    

//     const user = req.user.id;
//     const matcheId  = req.params;
//     const { usuario, partido } = req.body


//    const findBooking = await Booking.find(booking.partido)
    
//     if (findBooking != matchesId) res.status(400).json({
//         succes : false,
//         message: "Este partido no existe"
//     })



//     let users = Matches.find(inscritos);

//     if (users) {
//         return next({
//             status: 403,
//             message: "Este usuario ya esta registrado"
//         })
//     };


//     if (matchesId.inscritos >= matchesId.jugadores){
//         return res.status(400).json({
//             success: false,
//             message: "No quedan cupos"
//         })

//     }



//     let todayRent= await Matches.find({usuario});

//     todayRent.forEach(reserva =>{
//         let inscrito = Matches.inscritos._id.equals(matchesId)
//         let participantes = Matches.participante._id.equals(matchesId)
//         if(inscrito.length > participantes){
//             return next({
//                 status: 403,
//                 message:"No quedan plazas disponibles"
//             })
//         } else {
//             deportes.participantes -= quantity
//         }
        
//     })



//     const crearReserva = new Rental({
//         usuario,
//     });

//     let nuevaReserva = await crearReserva.save();
//     await matchesId.pussh(nuevaReserva)
//     return res.json({
//         success: true,
//         nuevaReserva
//     });

// }
// catch (err) {
//     return next({
//         status: 500,
//         message: err.message

//     })
// };
// })