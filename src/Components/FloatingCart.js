import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import styles from "./FloatingCart.module.css";

function FloatingCart() {
  const { cart, handleCartShow } = useContext(AppContext);
  return (
    <div className={`${styles.FloatingCartContainer} ${cart.length && styles.ShowFloatingCart}`} onClick={handleCartShow}>
      <div className={styles.VerticalText}>My Cart</div>
      <div className={styles.CartIcon}>
        <i className="fa-solid fa-cart-shopping"></i>
        <div className={`${styles.CartCounter}`}>
          {cart.length}
        </div>
        </div>
    </div>
  );
}

export default FloatingCart;
