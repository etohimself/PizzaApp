import { useContext } from "react";
import styles from "./CheckOrder.module.css";
import Button1 from "./Button1";
import { AppContext } from "../Contexts/AppContext";

function CheckOrder() {
  const {
    checkOrderNumber,
    checkOrderPhone,
    setCheckOrderNumber,
    setCheckOrderPhone,
    handleCheckOrderClose,
    handleCheckOrder,
    checkOrderError,
  } = useContext(AppContext);

  const closeMe = (event) => {
    event.target == event.currentTarget && handleCheckOrderClose();
  };

  return (
    <div className={styles.CheckOrderOverlay} onClick={closeMe}>
      <div className={styles.CheckOrderContainer}>
        <div className={styles.CheckOrderInner}>
          <h1>Check Your Order</h1>
          <p className={styles.CheckOrderInstructions}>
            Enter your <b>Order Number</b> or your <b>Contact Phone Number </b>
            to check the status of your order.
          </p>
          <p>Order Number :</p>
          <input
            placeholder="### ### ##"
            type="text"
            value={checkOrderNumber}
            onChange={(e) =>
              setCheckOrderNumber(e.target.value.replace(/\s/g, ""))
            }
          ></input>
          <p>Phone Number :</p>
          <input
            placeholder="+## ### ### ## ##"
            type="text"
            value={checkOrderPhone}
            onChange={(e) =>
              setCheckOrderPhone(e.target.value.replace(/\s/g, ""))
            }
          ></input>
        </div>
        <p className={styles.checkOrderErrorMsg}>{checkOrderError}</p>
        <Button1 className={styles.CheckButton} onClick={handleCheckOrder}>
          Check Order
        </Button1>
      </div>
    </div>
  );
}

export default CheckOrder;
