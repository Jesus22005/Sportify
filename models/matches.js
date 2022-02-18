const mongoose = require("mongoose");
const MatchesSchema = new mongoose.Schema({
sport:{
    
    type: mongoose.Types.ObjectId,
    ref: "Sport"
},

jugadores: {
    type: Number,
    required: true},

cupos: {
        type: Number,
        required: true},

date: {type: Date,
    required: true,
},
hora:{
   type: String,
   required: true, 
},


lugar:{
    
        type: mongoose.Types.ObjectId,
        ref: 'Location'
        
    
},

precio:{
    type: mongoose.Types.ObjectId,
        ref: 'Location'
},

user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  
    
},

inscritos:[{
    
    
    type: mongoose.Types.ObjectId,
    ref: 'User',
  
  

}],


// [{
//     type: mongoose.Types.ObjectId,
//     ref: "Booking",
    
// }],

status: {
    type: String,
    default: "libre",
    enum: ["reservado", "libre"]
}

})

module.exports = mongoose.model("Match", MatchesSchema)