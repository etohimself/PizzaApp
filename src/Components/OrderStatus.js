import { useContext } from "react";
import styles from "./OrderStatus.module.css";
import StepsGraph from "./StepsGraph";
import Step from "./Step";
import { AppContext } from "../Contexts/AppContext";
import Button1 from "./Button1";
import getLocalStorageOrders from "../Helpers/getLocalStorageOrders";

function OrderStatus() {
  const { productDB, handleOrderStatusClose, viewedOrderNumber } =
    useContext(AppContext);
  const statusTitle = "Order Succesful!";
  const closeMe = (event) => {
    event.target == event.currentTarget && handleOrderStatusClose();
  };

  const storedOrders = getLocalStorageOrders();
  const myOrder = viewedOrderNumber
    ? storedOrders.filter(
        (eachOrder) => eachOrder.orderNumber == viewedOrderNumber
      )[0]
    : null;

  const parseOrderNum = (xOrder) => {
    return `${xOrder.toString().substr(0, 3)} ${xOrder
      .toString()
      .substr(3, 3)} ${xOrder.toString().substr(6, 2)}`;
  };

  const findFromDB = (eachItem) => {
    return {
      ...productDB.filter((x) => x.id == eachItem.id)[0],
      itemCount: eachItem.itemCount,
      selectedSize: eachItem.selectedSize,
      selectedCrust: eachItem.selectedCrust,
      selectedExtras: eachItem.selectedExtras,
      removedIngredients: eachItem.removedIngredients,
    };
  };

  const descriptionGenerator = (eachItem) => {
    let baseStr = `${eachItem.name}`;

    let sizeName =
      eachItem.hasOwnProperty("sizes") &&
      eachItem.sizes.length &&
      eachItem.sizes[eachItem.selectedSize].name;

    let crustName =
      eachItem.hasOwnProperty("crusts") &&
      eachItem.crusts.length &&
      eachItem.crusts[eachItem.selectedCrust].name;

    let extraNames =
      eachItem.hasOwnProperty("extras") &&
      eachItem.extras.length &&
      eachItem.selectedExtras.length > 0 &&
      eachItem.selectedExtras.reduce(
        (previousValue, eachExtraIndex) =>
          `${previousValue}, Extra ${eachItem.extras[eachExtraIndex].name}`,
        ""
      );

    let removedNames =
      eachItem.hasOwnProperty("ingredients") &&
      eachItem.ingredients.length &&
      eachItem.removedIngredients.length > 0 &&
      eachItem.removedIngredients.reduce(
        (previousValue, eachRemovedIndex) =>
          `${previousValue}, No ${eachItem.ingredients[eachRemovedIndex]}`,
        ""
      );

    baseStr = sizeName ? `${sizeName} ${baseStr}` : baseStr;
    baseStr = crustName ? `${baseStr}, ${crustName}` : baseStr;
    baseStr = extraNames ? `${baseStr}${extraNames}` : baseStr;
    baseStr = removedNames ? `${baseStr}${removedNames}` : baseStr;

    return baseStr;
  };
  /*
        recipientFullName,
        recipientAddress,
        recipientCity,
        recipientCountry,
        recipientDistrict,
        recipientPhoneNumber,
        recipientStreet,
        recipientBuildingNumber,
        */

  return (
    <div className={styles.OrderStatusOverlay} onClick={closeMe}>
      <div className={styles.OrderStatusContainer}>
        <div className={styles.OrderStatusInner}>
          <h1>{statusTitle}</h1>
          <StepsGraph>
            <Step done={1}>Order Received</Step>
            <Step done={myOrder && Date.now() - myOrder.orderDateTime > 30000}>
              Started Preparing
            </Step>
            <Step done={myOrder && Date.now() - myOrder.orderDateTime > 60000}>
              On The Way
            </Step>
            <Step done={myOrder && Date.now() - myOrder.orderDateTime > 90000}>
              Order Delivered
            </Step>
          </StepsGraph>
          <p className={styles.statusDescription}>
            We got your order. Your pizza will be prepared and delivered in{" "}
            <b>2 minutes</b> as this is a demo project. You can check every 30
            seconds. Make sure to take a note of the order number below. You can
            track the status via order number or your contact phone number.
          </p>
          <div className={styles.orderDetailsContainer}>
            <div className={styles.orderDetailsLeft}>
              <h2>Order Number :</h2>
              <h1>{myOrder && parseOrderNum(myOrder.orderNumber)}</h1>
              <h2>Delivery Info :</h2>
              <p>{myOrder && myOrder.recipientFullName}</p>
              <p>{myOrder && myOrder.recipientPhoneNumber}</p>
              <p>
                {myOrder &&
                  `${myOrder.recipientAddress} ${myOrder.recipientDistrict} ${myOrder.recipientStreet} ${myOrder.recipientBuildingNumber} - ${myOrder.recipientCity} / ${myOrder.recipientCountry} `}
              </p>
            </div>
            <div className={styles.orderDetailsRight}>
              <h2>Ordered Items : </h2>
              {myOrder &&
                myOrder.cart.map((eachItem, index) => {
                  return (
                    <p key={index}>
                      <b>{eachItem.itemCount}x </b>
                      {descriptionGenerator(findFromDB(eachItem))}
                    </p>
                  );
                })}
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
