import { Box, Divider, Typography } from "@mui/material";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Login from "./pages/Login";
import { GlobalProvider } from "./context/GlobalContext";
import Watchlist from "./components/Watchlist";

const Layout = () => {
  return (
    <Box display={"flex"} gap={"10px"} height={"100vh"}>
      <SideBar />
      <Divider orientation="vertical" />
      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="login" element={<Login />} />
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
