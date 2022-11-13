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
    handleOrderNow,
    cart,
  } = useContext(AppContext);

  const [formErrorList, setFormErrorList] = useState([]);
  const [checkoutError, setCheckoutError] = useState("");
  const [formValidated, setFormValidated] = useState(0);

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

  const hasError = (itemid) => {
    if (
      formErrorList &&
      formErrorList.length > 0 &&
      formErrorList.includes(itemid)
    ) {
      return styles.validationError;
    } else {
      return "";
    }
  };

  const validateFormAndSend = () => {
    let errorList = [];
    recipientAddress.length < 4 && errorList.push("checkout-address");
    recipientCountry.length < 4 && errorList.push("checkout-country");
    recipientCity.length < 4 && errorList.push("checkout-city");
    recipientDistrict.length < 4 && errorList.push("checkout-district");
    recipientStreet.length < 4 && errorList.push("checkout-street");
    recipientBuildingNumber.length < 4 && errorList.push("checkout-building");
    recipientFullName.length < 4 && errorList.push("checkout-name");
    recipientPhoneNumber.length < 7 && errorList.push("checkout-phone");
    creditCardHolder < 4 && errorList.push("checkout-cardholder");
    creditCardNumber.length < 16 && errorList.push("checkout-cardnumber");
    creditCardExpirationMonth.length < 2 &&
      errorList.push("checkout-cardmonth");
    creditCardExpirationYear.length < 4 && errorList.push("checkout-cardyear");
    creditCardCVV2.length < 3 && errorList.push("checkout-cardcvv");
    !termsAgreed && errorList.push("checkout-terms");

    setFormErrorList([...errorList]);
    errorList.length > 0 &&
      setCheckoutError(
        "You must fill out the form correctly and agree to our terms and conditions."
      );
    if (errorList.length < 1) {
      setFormValidated(1);
    }
  };

  useEffect(() => {
    if (formValidated == 1) {
      setCheckoutError("");
      document.getElementById("checkout-orderButton").click(); //Simulate click
    }
  }, [formValidated]);

  return (
    <div className={styles.CheckOutOverlay} onClick={closeMe}>
      <div className={styles.CheckOutContainer}>
        <h1>Complete Your Order</h1>
        <div className={styles.CheckOutContainerInner}>
          <div className={styles.AddressContainer}>
            <h1>Delivery Address</h1>
            <div className={styles.inputAreaContainer}>
              <div className={`${styles.inputArea} ${styles.inputAreaWide} `}>
                <p>Address : </p>
                <input
                  type="text"
                  value={recipientAddress || ""}
                  className={`${hasError("checkout-address")}`}
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
                  value={recipientCountry || ""}
                  className={`${hasError("checkout-country")}`}
                  onChange={(e) => setRecipientCountry(e.target.value)}
                ></input>
              </div>

              <div className={styles.inputArea}>
                <p>City : </p>
                <input
                  type="text"
                  value={recipientCity || ""}
                  className={`${hasError("checkout-city")}`}
                  onChange={(e) => setRecipientCity(e.target.value)}
                ></input>
              </div>
            </div>

            <div className={styles.inputAreaContainer}>
              <div className={styles.inputArea}>
                <p>District / Town : </p>
                <input
                  type="text"
                  value={recipientDistrict || ""}
                  className={`${hasError("checkout-district")}`}
                  onChange={(e) => setRecipientDistrict(e.target.value)}
                ></input>
              </div>

              <div className={styles.inputArea}>
                <p>Street : </p>
                <input
                  type="text"
                  value={recipientStreet || ""}
                  className={`${hasError("checkout-street")}`}
                  onChange={(e) => setRecipientStreet(e.target.value)}
                ></input>
              </div>
            </div>

            <div className={styles.inputAreaContainer}>
              <div className={styles.inputArea}>
                <p>Building / Number: </p>
                <input
                  type="text"
                  value={recipientBuildingNumber || ""}
                  className={`${hasError("checkout-building")}`}
                  onChange={(e) => setRecipientBuildingNumber(e.target.value)}
                ></input>
              </div>

              <div className={styles.inputArea}>
                <p>Post Code : </p>
                <input
                  type="text"
                  value={recipientPostCode || ""}
                  className={`${hasError("checkout-postcode")}`}
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
                  value={recipientFullName || ""}
                  className={`${hasError("checkout-name")}`}
                  onChange={(e) => setRecipientFullName(e.target.value)}
                ></input>
              </div>

              <div className={styles.inputArea}>
                <p>Phone : </p>
                <input
                  placeholder="+## ### ### ## ##"
                  type="text"
                  value={recipientPhoneNumber || ""}
                  className={`${hasError("checkout-phone")}`}
                  onChange={(e) =>
                    setRecipientPhoneNumber(e.target.value.replace(/\s/g, ""))
                  }
                ></input>
              </div>
            </div>
            <div className={styles.inputAreaContainer}>
              <div className={`${styles.inputArea} ${styles.inputAreaWide}`}>
                <p>Credit Card Number : </p>
                <div className={styles.cardNumberArea}>
                  <input
                    type="number"
                    value={creditCardNumber || ""}
                    className={`${hasError("checkout-cardnumber")}`}
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
                  value={creditCardHolder || ""}
                  className={`${hasError("checkout-cardholder")}`}
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
                  type="number"
                  maxLength="2"
                  min="01"
                  max="12"
                  value={creditCardExpirationMonth || ""}
                  className={`${styles.creditCardMonth} ${hasError(
                    "checkout-cardmonth"
                  )}`}
                  onChange={(e) =>
                    setCreditCardExpirationMonth(e.target.value.slice(0, 2))
                  }
                  placeholder="09"
                ></input>
                <span> / </span>
                <input
                  className={`${styles.creditCardYear} ${hasError(
                    "checkout-cardyear"
                  )}`}
                  maxLength="4"
                  minLength="4"
                  min="2022"
                  max="2050"
                  type="number"
                  value={creditCardExpirationYear || ""}
                  onChange={(e) =>
                    setCreditCardExpirationYear(e.target.value.slice(0, 4))
                  }
                  placeholder="2024"
                ></input>
              </div>
              <div className={styles.inputArea}>
                <p>CVV/CVV2 </p>
                <input
                  className={`${styles.creditCardCVV2} ${hasError(
                    "checkout-cardcvv"
                  )}`}
                  type="number"
                  value={creditCardCVV2 || ""}
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
                className={`${styles.inputArea}> ${
                  styles.termsAndConditions
                } ${hasError("checkout-terms")}`}
                onClick={handleTermsClick}
              >
                <CheckBox
                  value={termsAgreed}
                  className={`${styles.termsCheckBox} ${hasError(
                    "checkout-terms"
                  )}`}
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
          <div className={styles.errorMsg}>{checkoutError}</div>
          <Button1 className={styles.clearButton} onClick={handleClearCheckout}>
            Clear All
          </Button1>
          <Button1
            className={styles.orderButton}
            onClick={formValidated ? handleOrderNow : validateFormAndSend}
            delayed={formValidated ? 2 : 0}
            id="checkout-orderButton"
          >
            Order Now
          </Button1>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
