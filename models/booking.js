const mongoose = require("mongoose");
const BookingsSchema = new mongoose.Schema({
usuario:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},

partido:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Match"

},

inscritos: {
    type: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    //   minLength: 1,
    //   maxLength: 10,
  }],
  default: undefined,
}
  
})

module.exports = mongoose.model("Booking", BookingsSchema)