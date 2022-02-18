import "./App.css";
import Home from "./Components/Home/Home";
import HomeLogin from "./Components/Home/HomeLogin";
import HomeAdmin from "./Components/Home/HomeAdmin";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Users from "./Components/Users/Users";
import Usuario from "./Components/Users/User";
import Partidos from "./Components/Matches/Matches";
import Reservas from "./Components/Bookings/Bookings";
import NewMatch from "./Components/Matches/NewMatch";
import ModifyUser from "./Components/Users/ModifyUser";
import DeleteBookings from "./Components/Bookings/DeleteBooking";
import DeleteMatches from "./Components/Matches/DeleteMatches";
import Ubicaciones from "./Components/Locations/Locations";
import NewBookings from "./Components/Bookings/NewBooking";
import Sports from "./Components/Sports/Sports";
import NewSports from "./Components/Admin/NewSports"
import NewSportView from "./Components/Views/NewSportView";
import NewLocation from "./Components/Admin/NewLocation";
import NewLocationView from "./Components/Views/NewLocationView";
import DeleteLocations from "./Components/Admin/DeleteLocation"
import DeleteSports from "./Components/Admin/DeleteSports";
import ModifyLocation from "./Components/Admin/ModifyLocation"
import ModifyLocationView from "./Components/Views/ModifyLocationView";
import DeleteSportView from "./Components/Views/DeleteSportView";
import DeleteLocationView from "./Components/Views/DeleteLocationView";
import NewUserView from "./Components/Views/NewUserView";
import DeleteBookingsView from "./Components/Views/DeleteBookingView";
import DeleteMatchView from "./Components/Views/DeleteMatchesView";
import NewBookingsView from "./Components/Views/NewBookingView";
import ModifyUserView from "./Components/Views/ModifyUserView";
import DeleteUser from "./Components/Users/DeleteUser";
import DeleteUserView from "./Components/Views/DeleteUserView";
import MainHome from "./Components/Home/MainHome";
import MainHomeUser from "./Components/Home/MainHomeUser";
import NewMatchView from "./Components/Views/NewMatchView";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="Home" element={<MainHome />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="Register" element={<Register />} />
          <Route path="Locations" element={<Ubicaciones />} />
          <Route path="Sports" element={<Sports />} />
          <Route path="NewUser" element={<NewUserView />} />
          <Route path="DeleteUserView" element={<DeleteUserView />} />

        </Route>
        <Route path="/HomeUser" element={<HomeLogin />}>
          <Route path="UserId" element={<Usuario />}></Route>
          <Route path="Matches" element={<Partidos />}></Route>
          <Route path="NewMatch" element={<NewMatch />}></Route>
          <Route path="UpdateUser" element={<ModifyUser />} />
          <Route path="DeleteBooking" element={<DeleteBookings />} />
          <Route path="DeleteMatch" element={<DeleteMatches />} />
          <Route path="Users" element={<Users />} />
          <Route path="Locations" element={<Ubicaciones />} />
          <Route path="NewBooking" element={<NewBookings />} />
          <Route path="Sports" element={<Sports />} />
          <Route path="NewSport" element={<NewSports />} ></Route>
          <Route path="NewSportView" element={<NewSportView />} />
          <Route path="NewLocation" element={<NewLocation />} />
          <Route path="NewLocationView" element={<NewLocationView />} />
          <Route path="DeleteLocation" element={<DeleteLocations />} />
          <Route path="DeleteSport" element={<DeleteSports />} />
          <Route path="UpdateLocation" element={<ModifyLocation />} />
          <Route path="UpdateLocationView" element={<ModifyLocationView />} />
          <Route path="DeleteLocationView" element={<DeleteLocationView />} />
          <Route path="DeleteSportView" element={<DeleteSportView />} />
          <Route path="BookingDeleted" element={<DeleteBookingsView />} />
          <Route path="MatchDeleted" element={<DeleteMatchView />} />
          <Route path="NewBookingView" element={<NewBookingsView />} />
          <Route path="ModifyUserView" element={<ModifyUserView />} />
          <Route path="DeleteUser" element={<DeleteUser />} />
          <Route path="MainHomeUser" element={<MainHomeUser />} />
          <Route path="NewMatchView" element={<NewMatchView />} />
        </Route>
       
        <Route path="/Bookings" element={<Reservas />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
