export default () => {
  let storedOrders = JSON.parse(localStorage.getItem("pizzaApp-Orders")) || [];

  storedOrders = storedOrders.filter((eachOrder) => {
    return (
      eachOrder != null &&
      typeof eachOrder === "object" &&
      Object.hasOwnProperty.bind(eachOrder)("orderNumber") &&
      Object.hasOwnProperty.bind(eachOrder)("cart") &&
      Object.hasOwnProperty.bind(eachOrder)("recipientFullName") &&
      Object.hasOwnProperty.bind(eachOrder)("recipientPhoneNumber") &&
      Object.hasOwnProperty.bind(eachOrder)("recipientAddress") &&
      Object.hasOwnProperty.bind(eachOrder)("recipientCity") &&
      Object.hasOwnProperty.bind(eachOrder)("recipientCountry") &&
      Object.hasOwnProperty.bind(eachOrder)("recipientDistrict") &&
      Object.hasOwnProperty.bind(eachOrder)("recipientStreet") &&
      Object.hasOwnProperty.bind(eachOrder)("recipientBuildingNumber") &&
      Object.hasOwnProperty.bind(eachOrder)("orderDateTime") &&
      eachOrder.orderNumber >= 10000000 &&
      eachOrder.orderNumber <= 99999999 &&
      eachOrder.recipientPhoneNumber.length > 6
    );
  });

  return storedOrders;
};
