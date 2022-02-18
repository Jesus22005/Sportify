const mongoose = require("mongoose");
const LocationsSchema = new mongoose.Schema({
nombre:{
    type: String,
    required: true
},

deporte:{
    type: String,
    required: true
},

precio:{
    type: String,
    required: true
},

direccion:{
    type : String,
    required: true
},

contacto:{
   type: String,
   required: true 
},


})

module.exports = mongoose.model("Location", LocationsSchema)









// deporte:[{
//     deportes:{
//         type: mongoose.Types.ObjectId,
//         ref: 'Sport',
      
//   },
//   participantes: Number
// }],