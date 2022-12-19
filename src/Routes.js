import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
