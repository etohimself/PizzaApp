import { useContext } from "react";
import styles from "./OrderStatus.module.css";
import StepsGraph from "./StepsGraph";
import Step from "./Step";
import { AppContext } from "../Contexts/AppContext";
import Button1 from "./Button1";

function OrderStatus() {
  const { handleOrderStatusClose } = useContext(AppContext);
  const statusTitle = "Order Succesful!";
  const closeMe = (event) => {
    event.target == event.currentTarget && handleOrderStatusClose();
  };
  return (
    <div className={styles.OrderStatusOverlay} onClick={closeMe}>
      <div className={styles.OrderStatusContainer}>
        <div className={styles.OrderStatusInner}>
          <h1>{statusTitle}</h1>
          <StepsGraph>
            <Step done={1}>Order Received</Step>
            <Step done={1}>Started Preparing</Step>
            <Step done={1}>On The Way</Step>
            <Step done={0}>Order Delivered</Step>
          </StepsGraph>
          <p className={styles.statusDescription}>
            We got your order. Your pizza will be prepared and delivered in 40
            to 50 minutes depending on your location. Make sure to take a note
            of the order number below. You can track the status via order number
            or your contact phone number.
          </p>
          <div className={styles.orderDetailsContainer}>
            <div className={styles.orderDetailsLeft}>
              <h2>Order Number :</h2>
              <h1>493 685 12</h1>
              <h2>Delivery Info :</h2>
              <p>Ertuğrul CÖRE</p>
              <p>+90 538 570 97 86</p>
              <p>
                Yunus Mahallesi, Sezgin Sokak, No 24: Daire :3
                Kartal/Istanbul/Turkey Posta Kodu : 34768
              </p>
            </div>
            <div className={styles.orderDetailsRight}>
              <h2>Ordered Items : </h2>
              <p>
                <b>1x </b>Margherita Pizza, No Olives, White Thin Crust, Extra
                Cheese
              </p>
              <p>
                <b>2x </b>Coca Cola 30cc
              </p>
            </div>
          </div>
        </div>
        <Button1
          className={styles.closeButton}
          onClick={handleOrderStatusClose}
        >
          Close
        </Button1>
      </div>
    </div>
  );
}

export default OrderStatus;
