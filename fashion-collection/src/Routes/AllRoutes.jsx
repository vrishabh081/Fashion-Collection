import { Route, Routes } from "react-router-dom";
import Bag from "../Components/Bag";
import Login from "../Components/Login";
import Wishlist from "../Components/Wishlist";
import Kids from "./Kids";
import Men from "./Men";
import Women from "./Women";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/bag" element={<Bag />} />
      <Route path="/womenshop" element={<h1>Shoping</h1>} />
    </Routes>
  );
}

export default AllRoutes;
