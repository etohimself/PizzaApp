import styles from "./FoodMenu.module.css";
import FoodSlicer from "./FoodSlicer.js";
import ProductList from "./ProductList.js";
import AddToCart from "./AddToCart.js";

function FoodMenu() {
  return (
    <div className={styles.FoodMenuContainer}>
      <h1>Pizza House’s Menu</h1>
      <FoodSlicer />
      <ProductList />
      <AddToCart />
    </div>
  );
}

export default FoodMenu;
