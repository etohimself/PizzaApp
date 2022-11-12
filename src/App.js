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

function App() {
  const { isAddToCartVisible, checkoutVisible } = useContext(AppContext);

  return (
    <div className="App">
      <Navbar />
      <Welcomer />
      <FoodMenu />
      <FloatingCart />
      <Cart />
      {isAddToCartVisible ? <AddToCart /> : ""}
      {checkoutVisible ? <CheckOut /> : ""}
      <OrderStatus />
    </div>
  );
}

export default App;
