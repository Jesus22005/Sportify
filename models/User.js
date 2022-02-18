const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
nombre:{
    type: String,
    required: true
},
apellidos:{
    type: String,
    required: true
},

nombreUsuario:{
    type: String,
    required: true
},

clave:{
    type: String,
    required: true
},

edad:{
    type: Number,
    required: true
},

genero:{
    type: String,
    required: true
},

localidad:{
    type: String,
    required: true
},

deportesFavoritos:{

    type: [{
        type: mongoose.Types.ObjectId,
        ref: 'Sport',
      minLength: 1,
      maxLength: 10,
  }],
  default: undefined,



    // type: String,
    // required: true

    // // type: mongoose.Types.ObjectId,
    // // ref: "Sport"
},

email:{
    type: String,
    required: true
},

descripcion:{
    type: String,
    required: true
},

partidos:[{
    
    
    type: mongoose.Types.ObjectId,
    ref: 'Match',
    
  
  

}],

reservas:[{
    
    
    type: mongoose.Types.ObjectId,
    ref: 'Booking',
  
  

}],

role: {
    type: Number,
    default: 0
},

})



module.exports = mongoose.model("User", UserSchema)