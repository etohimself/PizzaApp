import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { cart, handleCartShow } = useContext(AppContext);

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
          <div className={styles.NavbarButton}>My Order</div>
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
        <div className={styles.NavbarMobileButton}>
          <i class="fas fa-home"></i>
          <p>Home</p>
        </div>
        <div className={styles.NavbarMobileButton}>
          <i class="fas fa-list"></i>
          <p>Menu</p>
        </div>
        <div className={styles.NavbarMobileButton}>
          <i class="fa fa-search-location"></i>
          <p>My Order</p>
        </div>
        <div className={styles.CartMobileButton} onClick={handleCartShow}>
          <i class="fa-solid fa-cart-shopping"></i>
          <div className={`${styles.CartCounterMobile} ${ cart.length > 0 && styles.ShowItem}`}>{cart.length}</div>
          <p>My Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
