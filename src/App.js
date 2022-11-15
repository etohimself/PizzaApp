import "./App.css";
import Navbar from "./Components/Navbar";
import Welcomer from "./Components/Welcomer";
import FoodMenu from "./Components/FoodMenu";
import FloatingCart from "./Components/FloatingCart";
import Cart from "./Components/Cart";
import { useContext } from "react";
import { AppContext } from "./Contexts/AppContext";
import AddToCart from "./Components/AddToCart";
import CheckOut from "./Components/CheckOut";
import OrderStatus from "./Components/OrderStatus";
import CheckOrder from "./Components/CheckOrder";
import Footer from "./Components/Footer.js";

function App() {
  const {
    isAddToCartVisible,
    checkoutVisible,
    orderStatusVisible,
    checkOrderVisible,
  } = useContext(AppContext);

  return (
    <div className="App">
      <Navbar />
      <Welcomer />
      <FoodMenu />
      <FloatingCart />
      <Cart />
      {isAddToCartVisible ? <AddToCart /> : ""}
      {checkoutVisible ? <CheckOut /> : ""}
      {orderStatusVisible ? <OrderStatus /> : ""}
      {checkOrderVisible ? <CheckOrder /> : ""}
      <Footer />
    </div>
  );
}

export default App;
