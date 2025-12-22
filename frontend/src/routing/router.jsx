import Home from "../pages/Home";
import Auth from "../pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
