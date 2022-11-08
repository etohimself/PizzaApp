import styles from "./CheckOut.module.css";
import Button1 from "./Button1";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Contexts/AppContext";
import GetCardType from "credit-card-type";

function CheckOut() {
  const [cardType, setCardType] = useState("visa");

  const {
    handleClearCheckout,
    recipientFullName,
    setRecipientFullName,
    recipientPhoneNumber,
    setRecipientPhoneNumber,
    recipientAddress,
    setRecipientAddress,
    recipientCountry,
    setRecipientCountry,
    recipientCity,
    setRecipientCity,
    recipientDistrict,
    setRecipientDistrict,
    recipientStreet,
    setRecipientStreet,
    recipientBuildingNumber,
    setRecipientBuildingNumber,
    recipientPostCode,
    setRecipientPostCode,
    creditCardNumber,
    setCreditCardNumber,
    creditCardHolder,
    setCreditCardHolder,
    creditCardExpirationMonth,
    setCreditCardExpirationMonth,
    creditCardExpirationYear,
    setCreditCardExpirationYear,
    creditCardCVV2,
    setCreditCardCVV2,
  } = useContext(AppContext);

  useEffect(() => {
    let cardQuery = GetCardType(creditCardNumber);
    if (
      cardQuery &&
      cardQuery.length > 0 &&
      cardQuery[0].hasOwnProperty("type")
    ) {
      setCardType(GetCardType(creditCardNumber)[0].type);
    }
  }, [creditCardNumber]);

  const cvvLength = () => {
    return cardType == "american-express" || cardType == "hipercard" ? 4 : 3;
  };

  return (
    <div className={styles.CheckOutOverlay}>
      <div className={styles.CheckOutContainer}>
        <div className={styles.AddressContainer}>
          <h1>Recipient Info</h1>
          <div className={styles.inputAreaContainer}>
            <div className={styles.inputArea}>
              <p>Name : </p>
              <input
                type="text"
                value={recipientFullName}
                onChange={(e) => setRecipientFullName(e.target.value)}
              ></input>
            </div>

            <div className={styles.inputArea}>
              <p>Phone : </p>
              <input
                placeholder="+## ### ### ## ##"
                type="text"
                value={recipientPhoneNumber}
                onChange={(e) => setRecipientPhoneNumber(e.target.value)}
              ></input>
            </div>
          </div>

          <h1>Delivery Address</h1>

          <div className={styles.inputAreaContainer}>
            <div className={`${styles.inputArea} ${styles.inputAreaWide}`}>
              <p>Address : </p>
              <input
                type="text"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                placeholder="District / Street / Building / City / Country"
              ></input>
            </div>
          </div>

          <div className={styles.inputAreaContainer}>
            <div className={styles.inputArea}>
              <p>Country : </p>
              <input
                type="text"
                value={recipientCountry}
                onChange={(e) => setRecipientCountry(e.target.value)}
              ></input>
            </div>

            <div className={styles.inputArea}>
              <p>City : </p>
              <input
                type="text"
                value={recipientCity}
                onChange={(e) => setRecipientCity(e.target.value)}
              ></input>
            </div>
          </div>

          <div className={styles.inputAreaContainer}>
            <div className={styles.inputArea}>
              <p>District / Town : </p>
              <input
                type="text"
                value={recipientDistrict}
                onChange={(e) => setRecipientDistrict(e.target.value)}
              ></input>
            </div>

            <div className={styles.inputArea}>
              <p>Street : </p>
              <input
                type="text"
                value={recipientStreet}
                onChange={(e) => setRecipientStreet(e.target.value)}
              ></input>
            </div>
          </div>

          <div className={styles.inputAreaContainer}>
            <div className={styles.inputArea}>
              <p>Building / Number: </p>
              <input
                type="text"
                value={recipientBuildingNumber}
                onChange={(e) => setRecipientBuildingNumber(e.target.value)}
              ></input>
            </div>

            <div className={styles.inputArea}>
              <p>Post Code : </p>
              <input
                type="text"
                value={recipientPostCode}
                onChange={(e) => setRecipientPostCode(e.target.value)}
              ></input>
            </div>
          </div>
          <Button1 className={styles.clearButton} onClick={handleClearCheckout}>
            Clear All
          </Button1>
        </div>

        <div className={styles.PaymentContainer}>
          <h1>Payment Info</h1>

          <div className={styles.inputAreaContainer}>
            <div className={`${styles.inputArea} ${styles.inputAreaWide}`}>
              <p>Credit Card Number : </p>
              <div className={styles.cardNumberArea}>
                <input
                  type="text"
                  value={creditCardNumber}
                  onChange={(e) => setCreditCardNumber(e.target.value)}
                  placeholder="****-****-****-****"
                ></input>
                <img
                  className={styles.cardIcon}
                  src={"svg/" + cardType + ".svg"}
                />
              </div>
            </div>
          </div>

          <div className={styles.inputAreaContainer}>
            <div className={`${styles.inputArea} ${styles.inputAreaWide}`}>
              <p>Credit Holder's Name : </p>
              <input
                type="text"
                value={creditCardHolder}
                onChange={(e) => setCreditCardHolder(e.target.value)}
                placeholder="John Appleseed"
              ></input>
            </div>
          </div>

          <div className={styles.inputAreaContainer}>
            <div className={styles.inputArea}>
              <p>Expiration date : </p>
              <input
                className={styles.creditCardMonth}
                type="number"
                maxLength="2"
                min="01"
                max="12"
                value={creditCardExpirationMonth}
                onChange={(e) =>
                  setCreditCardExpirationMonth(e.target.value.slice(0, 2))
                }
                placeholder="09"
              ></input>
              <span> / </span>
              <input
                className={styles.creditCardYear}
                maxLength="4"
                minLength="4"
                min="2022"
                max="2050"
                type="number"
                value={creditCardExpirationYear}
                onChange={(e) =>
                  setCreditCardExpirationYear(e.target.value.slice(0, 4))
                }
                placeholder="2024"
              ></input>
            </div>
            <div className={styles.inputArea}>
              <p>CVV/CVV2 </p>
              <input
                className={styles.creditCardCVV}
                type="number"
                value={creditCardCVV2}
                onChange={(e) =>
                  setCreditCardCVV2(e.target.value.slice(0, cvvLength()))
                }
                placeholder="***"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
