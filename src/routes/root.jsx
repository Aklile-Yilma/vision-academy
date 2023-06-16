import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Admisstions from "../pages/Admissions";
import News from "../pages/News";
import ContactUs from "../pages/ContactUs";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/admissions"
        element={
          <Layout>
            <Admisstions />
          </Layout>
        }
      />
      <Route
        path="/news"
        element={
          <Layout>
            <News />
          </Layout>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Layout>
            <ContactUs />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
};

export default RoutesComponent;
