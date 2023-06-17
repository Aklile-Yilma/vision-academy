import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import "./index.css";
import RoutesComponent from "./routes/root";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <RoutesComponent />
      <Footer />
    </main>
  );
}

export default App;
