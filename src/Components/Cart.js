import { useContext } from "react";
import styles from "./Cart.module.css";
import { AppContext } from "../Contexts/AppContext";
import CountSelector from "./CountSelector";

function Cart(props) {
  const { cart, cartVisible, handleCartClose } = useContext(AppContext);

  return (
    <div>
      <div
        className={`${styles.CartOverlay} ${
          cartVisible && styles.CartOverlayVisible
        }`}
        onClick={handleCartClose}
      ></div>
      <div
        className={`${styles.CartContainer} ${
          cartVisible && styles.CartContainerVisible
        }`}
      >
        <h1>My Cart</h1>
        <div className={styles.ItemContainer}>
          {cart.length > 0 &&
            cart.map((eachItem, index) => (
              <div className={styles.CartItem}>
                <div className={styles.CartItemImage}>
                  <img src={eachItem.img} />
                </div>
                <div className={styles.CartItemInfo}>
                  <div className={styles.CartItemTitleBar}>
                    <h2>{eachItem.name}</h2>
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                  <div className={styles.CartItemDescription}>
                    No Olives, White Thin Crust etc..
                  </div>
                  <div className={styles.CartItemActionBar}>
                    <CountSelector
                      value={eachItem.count}
                      fontSize={"24px"}
                      iconSize={"18px"}
                    />
                    <div>$
                      {(
                        (eachItem.price +
                          eachItem.extras.length * eachItem.extraPrice) *
                        eachItem.count
                      ).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        useGrouping: false,
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.PriceBar}>
          <p>Total Price : </p>
          <h2>$24.90</h2>
        </div>
      </div>
    </div>
  );
}

export default Cart;
