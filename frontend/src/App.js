import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import GuestRoutes from "./components/Routes/GuestRoutes";
import SemiProtectedRoutes from "./components/Routes/SemiProtectedRoutes";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./components/shared/Loader/Loader";

function App() {
  const { loading } = useLoadingWithRefresh();

  return loading ? (
    <Loader message={"Loading, Please wait ..."} />
  ) : (
    <BrowserRouter>
      <Navigation />
      <Routes>
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
