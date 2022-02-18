const mongoose = require("mongoose");
const SportsSchema = new mongoose.Schema({
deporte:{
    type: String,
    required: true
},

equipacion:{
    type: String,
    required: true
},

  
})

module.exports = mongoose.model("Sport", SportsSchema)