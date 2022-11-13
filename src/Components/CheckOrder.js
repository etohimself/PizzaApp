import styles from "./CheckOrder.module.css";

function CheckOrder() {
  return (
    <div classname={styles.CheckOrderContainer}>
      <div className={styles.CheckOrderInner}>
        <h1>Check Your Order</h1>
        <p>
          Enter your <b>Order Number</b> or your <b>Contact Phone Number</b> to
          check the status of your order.
        </p>
        <p>Order Number</p>
        <input type="number" value={checkOrder_orderNumber} />
        <input type="number" value={checkOrder_phoneNumber} />
      </div>
      <Button1 className={styles.checkButton}>Check Order</Button1>
    </div>
  );
}

export default CheckOrder;
