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

function App() {
  const {isAddToCartVisible} = useContext(AppContext);

  return (
    <div className="App">
      <Navbar />
      <Welcomer />
      <FoodMenu />
      <FloatingCart />
      <Cart />
      {isAddToCartVisible && <AddToCart />}
      <CheckOut />
    </div>
  );
}

export default App;
