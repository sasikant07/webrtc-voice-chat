import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Authenticate from "./pages/Authenticate/Authenticate";
import GuestRoutes from "./components/Routes/GuestRoutes";
import SemiProtectedRoutes from "./components/Routes/SemiProtectedRoutes";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}

        {/* --- Guest Routes --- */}
        <Route path="/" element={<GuestRoutes />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/authenticate" element={<GuestRoutes />}>
          <Route path="" element={<Authenticate />} />
        </Route>

        {/* --- Semi Protected Routes --- */}
        <Route path="/activate" element={<SemiProtectedRoutes />}>
          <Route path="" element={<Activate />} />
        </Route>

        {/* --- Protected Routes --- */}
        <Route path="/rooms" element={<ProtectedRoutes />}>
          <Route path="" element={<Rooms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
