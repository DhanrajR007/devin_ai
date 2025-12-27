import Home from "../pages/Home";
import Auth from "../pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Project from "../pages/Project";
import UserAuth from "../utils/helper.auth";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/project"
          element={
            <UserAuth>
              <Project />
            </UserAuth>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
