import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import "./index.css";
import RoutesComponent from "./routes/root";

function App() {
  return (
    <>
      <NavBar />
      <RoutesComponent />
      <Footer />
    </>
  );
}

export default App;
