import styles from "./Welcomer.module.css";

function Welcomer() {
  return (
    <div className={styles.WelcomerContainer}>
      <div className={styles.WelcomerTextArea}>
        <h1>Pizza House</h1>
        <h2>
          Unmatched taste,
          <br />
          fastest delivery.
        </h2>
        <h3>Special offers are valid until 31 October 2022.</h3>
      </div>
      <div className={styles.WelcomerImageArea}>
        <img src="/welcomer-image.png" width="100%" height="100%"></img>
      </div>
    </div>
  );
}

export default Welcomer;
