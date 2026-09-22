import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Order from "./pages/Order";
import {Routes, Route, useLocation} from "react-router-dom";

function App(){

  const location = useLocation();

  const isOrderPage = location.pathname === "/order";

  return(
    <>

    <Navbar />

    <Routes>

      <Route path="/" element={<Hero />} />

      <Route  path="/order" element={<Order />} />

    </Routes>

     {!isOrderPage && <Footer />}
    </>
  );
}
export default App;