import "./index.css";
import Header from "./layouts/Header";
import RoutesComponent from "./routes/root";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <RoutesComponent />
      <Footer />
    </>
  );
}

export default App;
