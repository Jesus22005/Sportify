require("dotenv").config();
const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose")
const UserRouter = require("./api/UserRouter")
const SportsRouter = require("./api/SportsRouter")
const MatchesRouter = require("./api/matchesRouter")
const LocationsRouter = require("./api/locationsRouter")
const BookingsRouter = require("./api/bookingsRouter")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.options('*', cors());

app.use("/users", UserRouter);
app.use("/sports", SportsRouter);
app.use("/matches", MatchesRouter);
app.use("/locations", LocationsRouter);
app.use("/bookings", BookingsRouter);

const URI = process.env.mongodb_url
mongoose.connect(URI, {

}).then(()=>{
    console.log("BBDD IS NOW CONNECTED")
}).catch(err =>{
    console.log(err);
})


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

// app.listen(5000, ()=> console.log("Server is working"))
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('El servidor esta corriendo en el puerto', PORT)
})