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
            <Step done={2}>Started Preparing</Step>
            <Step done={3}>On The Way</Step>
            <Step done={4}>Order Delivered</Step>
          </StepsGraph>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
