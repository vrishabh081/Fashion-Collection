import Footer from "./Components/Footer";
import SubTopNavBar from "./Components/SubTopNavBar";
import TopNavBar from "./Components/TopNavBar";
import AllRoutes from "./Routes/AllRoutes";

export default function App() {
  return (
    <div className="App">
      <SubTopNavBar />
      <TopNavBar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}
