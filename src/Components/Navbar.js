import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const {cart, handleCartShow} = useContext(AppContext);

  return (
    <div>
      <div className={styles.NavbarContainer}>
        <div className={styles.Brand}>
          <img src="logo.png" width="69" height="69" />
          <div className={styles.BrandLabel}>Pizza House</div>
        </div>

        <div className={styles.NavbarMenu}>
          <div className={styles.NavbarButton}>Home</div>
          <div className={styles.NavbarButton}>Menu</div>
          <div className={styles.NavbarButton}>Check Order</div>
          <div className={styles.CartButton} onClick={handleCartShow}>
            <i className="fa-solid fa-cart-shopping"></i>
            <div
              className={`${styles.CartCounter} ${
                cart.length && styles.ShowItem
              }`}
            >
              {cart.length}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.NavbarContainerMobile}>
        <div className={styles.Brand}>
          <img src="logo.png" width="20" height="20" />
          <div className={styles.BrandLabel}>Home</div>
        </div>
        <div className={styles.NavbarButton}>Menu</div>
        <div className={styles.NavbarButton}>Check Order</div>
        <div className={styles.CartButton} onClick={handleCartShow}>
          <i className="fa-solid fa-cart-shopping"></i>
          <div
            className={`${styles.CartCounter} ${cart.length && styles.ShowItem}`}
          >
            {cart.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
