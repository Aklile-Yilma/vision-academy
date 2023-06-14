import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Admisstions from "../pages/Admissions";

// components'

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admissions" element={<Admisstions />} />
      <Route path="/product/:id" element={<></>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesComponent;
