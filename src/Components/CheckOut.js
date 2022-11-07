import styles from "./CheckOut.module.css";
import AddressForm from "./AddressForm";

function CheckOut() {
  return (
    <div className={styles.CheckOutOverlay}>
      <div className={styles.CheckOutContainer}>
        <div className={styles.AddressContainer}>
          <h1>Delivery Address</h1>
          <AddressForm
            placesKey="AIzaSyD22cisYkNqlMvl7day_9y_rtGHWtn1dq8"
            inputId="address"
            setAddress={(addressObject) => console.log(addressObject)}
            required={true}
          />
        </div>

        <div className={styles.PaymentContainer}>
          <h1>Payment and Contact</h1>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
