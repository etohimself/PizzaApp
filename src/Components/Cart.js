import { useContext } from "react";
import styles from "./Cart.module.css";
import { AppContext } from "../Contexts/AppContext";
import CountSelector from "./CountSelector";
import priceFormat from "../Helpers/priceFormat";
import Button1 from "./Button1";

function Cart(props) {
  const {
    cart,
    cartVisible,
    handleCartClose,
    handleIncreaseItemCount,
    handleDecreaseItemCount,
    handleRemoveItem,
  } = useContext(AppContext);

  const itemPrices = cart.map((eachItem) => {
    return (
      (eachItem.price + eachItem.extras.length * eachItem.extraPrice) *
      eachItem.count
    );
  });

  const totalPrice =
    cart.length > 0
      ? itemPrices.reduce((valueSoFar, currentValue) => {
          return valueSoFar + currentValue;
        }, 0)
      : 0;

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
        <h1 className={styles.CartTitle}>My Cart</h1>
        <div className={styles.ItemContainer}>
          {cart.map((eachItem, index) => (
            <div className={styles.CartItem} key={index}>
              <div className={styles.CartItemImage}>
                <img src={eachItem.img} />
              </div>
              <div className={styles.CartItemInfo}>
                <div className={styles.CartItemTitleBar}>
                  <h2>{eachItem.name}</h2>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => handleRemoveItem(index)}
                  ></i>
                </div>
                <div className={styles.CartItemDescription}>
                  No Olives, White Thin Crust etc..
                </div>
                <div className={styles.CartItemActionBar}>
                  <CountSelector
                    value={eachItem.count}
                    onIncrement={() => handleIncreaseItemCount(index)}
                    onDecrement={() => handleDecreaseItemCount(index)}
                    size="small"
                  />
                  <div className={styles.CartItemPrice}>
                    ${priceFormat(itemPrices[index])}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.PriceBar}>
          <p>Total Price : </p>
          <h2>${priceFormat(totalPrice)}</h2>
        </div>
        <Button1 className={styles.checkoutButton}>Complete Order</Button1>
      </div>
    </div>
  );
}

export default Cart;
