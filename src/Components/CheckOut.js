import styles from "./CheckOut.module.css";
import Button1 from "./Button1";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Contexts/AppContext";
import GetCardType from "credit-card-type";
import CheckBox from "./CheckBox";
import priceFormat from "../Helpers/priceFormat";

function CheckOut() {
  const [cardType, setCardType] = useState("visa");
  const [mapString, setMapString] = useState(
    "https://www.google.com/maps/embed/v1/search?key=AIzaSyBK73HewkhHBVVs9nI98-HY_N7cZM_kdjE&q=New+York+City&zoom=18"
  );
  const {
    checkoutVisible,
    handleCheckoutShow,
    handleCheckoutClose,
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
    termsAgreed,
    handleTermsClick,
    cart,
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

  useEffect(() => {
    let staticPart = "https://www.google.com/maps/embed/v1/search?key=";
    let APIKey = "AIzaSyBK73HewkhHBVVs9nI98-HY_N7cZM_kdjE";
    let queryPart = `&q=${recipientCountry} ${recipientCity} ${recipientAddress}`;
    let zoomPart = "&zoom=18";
    setMapString(
      `${staticPart}${APIKey}${
        recipientCountry.length +
          recipientCity.length +
          recipientAddress.length >
        2
          ? queryPart
          : "&q=New+York+NY"
      }${zoomPart}`
    );
  }, [
    recipientAddress,
    recipientCountry,
    recipientDistrict,
    recipientCity,
    recipientBuildingNumber,
    recipientStreet,
  ]);

  const itemPrices =
    cart.length > 0 &&
    cart.map((eachItem) => {
      let basePrice = eachItem.price;
      let sizePrice =
        eachItem.hasOwnProperty("sizes") &&
        eachItem.sizes.length &&
        eachItem.sizes[eachItem.selectedSize].extraPrice;
      let crustPrice =
        eachItem.hasOwnProperty("crusts") &&
        eachItem.crusts.length &&
        eachItem.crusts[eachItem.selectedCrust].extraPrice;
      let extrasPrice =
        eachItem.hasOwnProperty("extras") &&
        eachItem.extras.length &&
        eachItem.selectedExtras.length > 0 &&
        eachItem.selectedExtras.reduce(
          (previousValue, eachExtraIndex) =>
            previousValue + eachItem.extras[eachExtraIndex].price,
          0
        );
      let eachItemsTotalPrice =
        eachItem.itemCount * (basePrice + sizePrice + crustPrice + extrasPrice);
      return eachItemsTotalPrice;
    });

  const totalPrice =
    cart.length > 0
      ? itemPrices.reduce((eachItemsTotalPrice, currentValue) => {
          return eachItemsTotalPrice + currentValue;
        }, 0)
      : 0;

  const closeMe = (event) => {
    event.target == event.currentTarget && handleCheckoutClose();
  };

  return (
    <div className={styles.CheckOutOverlay} onClick={closeMe}>
      <div className={styles.CheckOutContainer}>
        <h1>Complete Your Order</h1>
        <div className={styles.CheckOutContainerInner}>
          <div className={styles.AddressContainer}>
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
            <iframe
              src={mapString}
              id="map-frame"
              className={styles.mapFrame}
            ></iframe>
          </div>

          <div className={styles.PaymentContainer}>
            <h1>Payment Info</h1>
            <div className={styles.inputAreaContainer}>
              <div className={styles.inputArea}>
                <p>Recipient Name : </p>
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
            <div className={styles.inputAreaContainer}>
              <div className={`${styles.inputArea} ${styles.inputAreaWide}`}>
                <p>Credit Card Number : </p>
                <div className={styles.cardNumberArea}>
                  <input
                    type="number"
                    value={creditCardNumber}
                    onChange={(e) =>
                      setCreditCardNumber(e.target.value.slice(0, 16))
                    }
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
                <p>Card Holder's Name : </p>
                <input
                  type="text"
                  value={creditCardHolder}
                  onChange={(e) => setCreditCardHolder(e.target.value)}
                  placeholder="John Appleseed"
                ></input>
              </div>
            </div>

            <div
              className={`${styles.inputAreaContainer} ${styles.CartDatesContainer}`}
            >
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

            <div
              className={`${styles.inputAreaContainer} ${styles.termsAndPrice}`}
            >
              <div
                className={`${styles.inputArea}> ${styles.termsAndConditions}`}
              >
                <CheckBox
                  value={termsAgreed}
                  className={styles.termsCheckBox}
                  onClick={handleTermsClick}
                />
                I understand <b>this is a demo project</b>, therefore I will not
                be charged or delivered a real life product. I understand my
                billing information or my address will not be saved.
              </div>

              <div className={`${styles.inputArea}> ${styles.priceTotal}`}>
                <h1>${priceFormat(totalPrice)}</h1>
                <h2>Total price</h2>
                <div>Product: ${priceFormat(totalPrice / 1.18)}</div>
                <div>Tax : ${priceFormat(totalPrice * 0.18)}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actionBar}>
          <Button1 className={styles.clearButton} onClick={handleClearCheckout}>
            Clear All
          </Button1>
          <Button1 className={styles.orderButton} onClick={handleClearCheckout}>
            Order Now
          </Button1>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
