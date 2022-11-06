import "./App.css";
import Navbar from "./Components/Navbar";
import Welcomer from "./Components/Welcomer";
import FoodMenu from "./Components/FoodMenu";
import FloatingCart from "./Components/FloatingCart";
import Cart from "./Components/Cart";
import { AppContextProvider } from "./Contexts/AppContext.js";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Navbar />
        <Welcomer />
        <FoodMenu />
        <FloatingCart />
        <Cart />
      </AppContextProvider>
    </div>
  );
}

export default App;