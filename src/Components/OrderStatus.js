import styles from "./OrderStatus.module.css";
import StepsGraph from "./StepsGraph";
import Step from "./Step";

function OrderStatus() {
  const statusTitle = "Order Succesful!";
  return (
    <div className={styles.OrderStatusOverlay}>
      <div className={styles.OrderStatusContainer}>
        <div className={styles.OrderStatusInner}>
          <h1>{statusTitle}</h1>
          <StepsGraph>
            <Step done={1}>Order Received</Step>
            <Step>Started Preparing</Step>
            <Step>On The Way</Step>
            <Step>Order Delivered</Step>
          </StepsGraph>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
