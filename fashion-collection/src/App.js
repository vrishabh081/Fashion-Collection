import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import AllRoutes from "./Routes/AllRoutes";

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}
