import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Admisstions from "../pages/Admissions";
import News from "../pages/News";
import ContactUs from "../pages/ContactUs";
import Staff from "../pages/Staff";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<Admisstions />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
