import { createContext, useState } from "react";
import randNum from "../Helpers/randNum";
import getLocalStorageOrders from "../Helpers/getLocalStorageOrders";

export const AppContext = createContext();

export function AppContextProvider(props) {
  //=================================================== STATE =================================================================0
  const [productDB, setProductDB] = useState([
    {
      id: "1d783149-0480-45c0-99cc-b41b48bdfc9f",
      img: "pizza1.png",
      name: "Sausage Pizza",
      description:
        "Classic Italian Pizza with Tomato sauce, sausages and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        {
          name: "Small",
          extraPrice: 0,
        },
        {
          name: "Medium",
          extraPrice: 4.75,
        },
        {
          name: "Large",
          extraPrice: 8.9,
        },
      ],
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "3cd83661-df42-487d-99b4-09aca7cc15e6",
      img: "pizza2.png",
      name: "Mediterrian",
      description: "Cheese, olives, Tomatoes, sauce, classic taste.",
      price: 12.9,
      productType: 2,
      sizes: [
        {
          name: "Small",
          extraPrice: 0,
        },
        {
          name: "Medium",
          extraPrice: 4.75,
        },
        {
          name: "Large",
          extraPrice: 8.9,
        },
      ],
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "04030be2-3e27-4c5a-81d2-c79b81a5bc9b",
      img: "pizza3.png",
      name: "Mixed",
      description: "Two slices of Pizza house’s selection.",
      price: 16.9,
      productType: 1,
      sizes: [
        {
          name: "Small",
          extraPrice: 0,
        },
        {
          name: "Medium",
          extraPrice: 4.75,
        },
        {
          name: "Large",
          extraPrice: 8.9,
        },
      ],
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "4c647db2-8203-44ec-bfa1-d434f688d1a5",
      img: "pizza4.png",
      name: "Mushroom",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        {
          name: "Small",
          extraPrice: 0,
        },
        {
          name: "Medium",
          extraPrice: 4.75,
        },
        {
          name: "Large",
          extraPrice: 8.9,
        },
      ],
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "d62a222c-749f-4827-b673-6b39f51e3746",
      img: "pizza5.png",
      name: "Veggy",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 16.9,
      productType: 1,
      sizes: [
        {
          name: "Small",
          extraPrice: 0,
        },
        {
          name: "Medium",
          extraPrice: 4.75,
        },
        {
          name: "Large",
          extraPrice: 8.9,
        },
      ],
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "aac3e388-1ca7-4306-8df6-4b3059805511",
      img: "pizza6.png",
      name: "Pepperoni",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        {
          name: "Small",
          extraPrice: 0,
        },
        {
          name: "Medium",
          extraPrice: 4.75,
        },
        {
          name: "Large",
          extraPrice: 8.9,
        },
      ],
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "f8ab9a5b-f005-4fa1-8620-97fe0f9c07a1",
      img: "pizza7.png",
      name: "Cheesy",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        {
          name: "Small",
          extraPrice: 0,
        },
        {
          name: "Medium",
          extraPrice: 4.75,
        },
        {
          name: "Large",
          extraPrice: 8.9,
        },
      ],
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "e79fde93-0e23-4b83-b8a2-7ddf7d44e481",
      img: "pizza8.png",
      name: "Gamer",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 16.9,
      productType: 1,
      sizes: [
        {
          name: "Small",
          extraPrice: 0,
        },
        {
          name: "Medium",
          extraPrice: 4.75,
        },
        {
          name: "Large",
          extraPrice: 8.9,
        },
      ],
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "aa3b58b3-0008-4c56-a139-dae3194203b4",
      img: "pizza9.png",
      name: "Buffalo",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        {
          name: "Small",
          extraPrice: 0,
        },
        {
          name: "Medium",
          extraPrice: 4.75,
        },
        {
          name: "Large",
          extraPrice: 8.9,
        },
      ],
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "d1357203-4682-4a17-afe7-fcb7df62c464",
      img: "cocacola.png",
      name: "CocaCola",
      description: "220ml coca cola.",
      price: 2.9,
      productType: 4,
      sizes: [
        {
          name: "220ml",
          extraPrice: 0,
        },
        {
          name: "330ml",
          extraPrice: 1.2,
        },
        {
          name: "1LT",
          extraPrice: 5.75,
        },
      ],
    },
    {
      id: "f6e2f663-216d-40b1-a84c-a74f21b82ed8",
      img: "fanta.png",
      name: "Fanta",
      description: "220ml fanta.",
      price: 2.9,
      productType: 4,
      sizes: [
        {
          name: "220ml",
          extraPrice: 0,
        },
        {
          name: "330ml",
          extraPrice: 1.2,
        },
        {
          name: "1LT",
          extraPrice: 5.75,
        },
      ],
    },
    {
      id: "19b35d88-25bd-4baf-9475-28bf26a3ceb0",
      img: "pepsi.png",
      name: "Pepsi",
      description: "220ml pepsi.",
      price: 2.9,
      productType: 4,
      sizes: [
        {
          name: "220ml",
          extraPrice: 0,
        },
        {
          name: "330ml",
          extraPrice: 1.2,
        },
        {
          name: "1LT",
          extraPrice: 5.75,
        },
      ],
    },
    {
      id: "d1d9e55f-9839-4a44-affc-d42741ec635e",
      img: "sprite.png",
      name: "Sprite",
      description: "220ml sprite",
      price: 2.9,
      productType: 4,
      sizes: [
        {
          name: "220ml",
          extraPrice: 0,
        },
        {
          name: "330ml",
          extraPrice: 1.2,
        },
        {
          name: "1LT",
          extraPrice: 5.75,
        },
      ],
    },
    {
      id: "553521c4-21f0-461c-9b5c-62090a5b54fc",
      img: "deal1.png",
      name: "Double Mix",
      description: "2x Large Mixed Pizzas, 1x Coca Cola 1Lt",
      price: 32.49,
      productType: 3,
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "0e6e7010-1e43-4b89-a211-4bbb05e2f2e7",
      img: "deal2.png",
      name: "Triplex",
      description: "3x Large Gamer Pizzas, 1.5Lt CocaCola",
      price: 32.49,
      productType: 3,
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
    {
      id: "4479278d-0b47-4aad-93ac-8e5f14be8266",
      img: "deal3.png",
      name: "Sprite Menu",
      description: "2x Large Mixed Pizzas, 1Lt Sprite",
      price: 42.8,
      productType: 3,
      crusts: [
        {
          name: "Classic",
          extraPrice: 0,
        },
        {
          name: "Wheat Thin Crust",
          extraPrice: 0.5,
        },
        {
          name: "Cheese Burs",
          extraPrice: 2.75,
        },
      ],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: [
        {
          name: "Cheese",
          price: 0.85,
        },
        {
          name: "Onions",
          price: 0.5,
        },
        {
          name: "Sausages",
          price: 1.2,
        },
      ],
    },
  ]);

  const [cart, setCart] = useState([]);
  const [currentSelection, setCurrentSelection] = useState(2);
  const [isAddToCartVisible, setAddToCartVisible] = useState(0);
  const [checkoutVisible, setCheckoutVisible] = useState(0);
  const [maxItemCount, setMaxItemCount] = useState(8);
  const [itemCount, setItemCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedCrust, setSelectedCrust] = useState(0);
  const [removedIngredients, setRemovedIngredients] = useState([]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [cartVisible, setCartVisible] = useState(0);
  const [recipientFullName, setRecipientFullName] = useState("");
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [recipientCountry, setRecipientCountry] = useState("");
  const [recipientCity, setRecipientCity] = useState("");
  const [recipientDistrict, setRecipientDistrict] = useState("");
  const [recipientStreet, setRecipientStreet] = useState("");
  const [recipientBuildingNumber, setRecipientBuildingNumber] = useState("");
  const [recipientPostCode, setRecipientPostCode] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardHolder, setCreditCardHolder] = useState("");
  const [creditCardExpirationMonth, setCreditCardExpirationMonth] =
    useState("");
  const [creditCardExpirationYear, setCreditCardExpirationYear] = useState("");
  const [creditCardCVV2, setCreditCardCVV2] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(0);
  const [checkoutError, setCheckoutError] = useState("");
  const [formErrorList, setFormErrorList] = useState([]);
  const [orderStatusVisible, setOrderStatusVisible] = useState(0);
  const [viewedOrderNumber, setviewedOrderNumber] = useState(0);
  const [checkOrderNumber, setCheckOrderNumber] = useState();
  const [checkOrderPhone, setCheckOrderPhone] = useState("");
  const [checkOrderVisible, setCheckOrderVisible] = useState(0);
  const [checkOrderError, setCheckOrderError] = useState("");

  //=================================================== FUNCTIONS =================================================================
  const filterProducts = (rawDB, filterType) => {
    return rawDB.filter((eachItem) => eachItem.productType == filterType);
  };

  const updateSelection = (selectedID) => {
    setCurrentSelection((prevState) => selectedID);
  };

  const handleItemClicked = (clickedID) => {
    let itemFromDB = productDB.filter((x) => x.id == clickedID)[0];
    setAddToCartVisible(1);
    setItemCount(1);
    setSelectedItem({ ...itemFromDB });
    setSelectedSize(0);
    setRemovedIngredients([]);
    setSelectedExtras([]);
    setSelectedCrust(0);
  };

  const handleAddToCartClose = () => {
    setAddToCartVisible(0);
    setItemCount(0);
    setSelectedItem({});
    setSelectedSize(0);
    setRemovedIngredients([]);
    setSelectedExtras([]);
    setSelectedCrust(0);
  };

  const handleItemCountDecrement = () => {
    setItemCount((prevState) => (prevState > 1 ? prevState - 1 : 1));
  };

  const handleItemCountIncrement = () => {
    setItemCount((prevState) =>
      prevState < maxItemCount ? prevState + 1 : maxItemCount
    );
  };

  const handleAddToCart = () => {
    let itemToAdd = {
      ...selectedItem,
      itemCount,
      selectedSize,
      removedIngredients,
      selectedExtras,
      selectedCrust,
    };
    setCart((prevState) => [...prevState, itemToAdd]);
    handleAddToCartClose();
  };

  const handleSizeSelection = (selectedIndex) => {
    setSelectedSize(selectedIndex);
  };

  const handleCrustSelection = (selectedIndex) => {
    setSelectedCrust(selectedIndex);
  };

  const handleRemoveIngredient = (removedIndex) => {
    setRemovedIngredients([...removedIngredients, removedIndex]);
  };

  const handleExtraSelection = (selectedIndex) => {
    //Adding the index only
    if (selectedExtras.includes(selectedIndex)) {
      setSelectedExtras([...selectedExtras].filter((x) => x != selectedIndex));
    } else {
      setSelectedExtras([...selectedExtras, selectedIndex]);
    }
  };

  const handleCartClose = () => {
    setCartVisible(0);
  };

  const handleCartShow = () => {
    setCartVisible(1);
  };

  const handleCheckoutClose = () => {
    setCheckoutVisible(0);
  };

  const handleCheckoutShow = () => {
    setCheckoutVisible(1);
    setCheckoutError("");
    setFormErrorList([]);
    setCartVisible(0);
  };

  const handleOrderStatusShow = () => {
    setOrderStatusVisible(1);
  };

  const handleOrderStatusClose = () => {
    setOrderStatusVisible(0);
  };

  const handleIncreaseItemCount = (index) => {
    setCart((previousCart) => {
      return previousCart.map((eachItem, currentIndex) => {
        if (index == currentIndex && eachItem.itemCount < maxItemCount) {
          return { ...eachItem, itemCount: eachItem.itemCount + 1 };
        } else {
          return eachItem;
        }
      });
    });
  };

  const handleDecreaseItemCount = (index) => {
    setCart((previousCart) => {
      let newCart = previousCart.map((eachItem, currentIndex) => {
        if (index == currentIndex && eachItem.itemCount > 0) {
          return { ...eachItem, itemCount: eachItem.itemCount - 1 };
        } else {
          return eachItem;
        }
      });
      return newCart.filter((eachItem) => eachItem.itemCount > 0); //Filter zero counts, prevent passing null via map()
    });
  };

  const handleRemoveItem = (index) => {
    setCart((previousCart) => {
      return previousCart.filter(
        (eachItem, currentIndex) => index != currentIndex
      );
    });
  };

  const handleClearCheckout = () => {
    setRecipientFullName("");
    setRecipientPhoneNumber("");
    setRecipientCountry("");
    setRecipientCity("");
    setRecipientDistrict("");
    setRecipientStreet("");
    setRecipientBuildingNumber("");
    setRecipientPostCode("");
    setRecipientAddress("");
    setCreditCardNumber("");
    setCreditCardHolder("");
    setCreditCardExpirationMonth("");
    setCreditCardExpirationYear("");
    setCreditCardCVV2("");
    setTermsAgreed(0);
    setFormErrorList([]);
    setCheckoutError("");
  };

  const handleTermsClick = () => {
    setTermsAgreed((previousValue) => !previousValue);
    setCheckoutError("");
  };

  const handleOrderNow = () => {
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
      //Actually make the purchase here if server was implemented..
      //This is a demo project, we do not store any info..
      //We are using localStorage for simulation purpose for now..

      let cart_idonly = cart.reduce((previousValue, currentItem) => {
        return [
          ...previousValue,
          {
            id: currentItem.id,
            itemCount: currentItem.itemCount,
            selectedSize: currentItem.selectedSize,
            selectedCrust: currentItem.selectedCrust,
            selectedExtras: currentItem.selectedExtras,
            removedIngredients: currentItem.removedIngredients,
          },
        ];
      }, []);

      let myOrder = {
        orderNumber: randNum(42431534, 98698943),
        cart: cart_idonly,
        recipientFullName,
        recipientAddress,
        recipientCity,
        recipientCountry,
        recipientDistrict,
        recipientPhoneNumber,
        recipientStreet,
        recipientBuildingNumber,
        orderDateTime: Date.now(),
      };

      let storedOrders = getLocalStorageOrders();
      storedOrders.push(myOrder);
      localStorage.setItem("pizzaApp-Orders", JSON.stringify(storedOrders));

      handleCheckoutClose();
      handleOrderStatusShow();
      handleClearCheckout();
      setCart([]);
      setviewedOrderNumber(myOrder.orderNumber);
    }
  };

  const handleCheckOrderShow = () => {
    setCheckOrderNumber();
    setCheckOrderPhone("");
    setCheckOrderError("");
    setCheckOrderVisible(1);
  };

  const handleCheckOrderClose = () => {
    setCheckOrderVisible(0);
  };

  const handleCheckOrder = () => {
    let storedOrders = getLocalStorageOrders();

    let mostRecentOrder = storedOrders
      .filter(
        (eachOrder) =>
          eachOrder.orderNumber == checkOrderNumber ||
          eachOrder.recipientPhoneNumber == checkOrderPhone
      )
      .sort((a, b) => a.orderDateTime - b.orderDateTime)[0];

    if (mostRecentOrder) {
      setviewedOrderNumber(mostRecentOrder.orderNumber);
      handleCheckOrderClose();
      setOrderStatusVisible(1);
    } else {
      setCheckOrderError(
        "We could not find your order. Please check your order number or your phone number."
      );
    }
  };

  return (
    <AppContext.Provider
      value={{
        productDB,
        filteredProducts: filterProducts(productDB, currentSelection), //Menu displays the filtered products
        currentSelection, //Menu uses currentSelection to emphasize selected slicer
        updateSelection, //Menu uses this function to report slicer selections
        handleAddToCart, //Add to Cart button uses this function to report adding to cart event
        isAddToCartVisible, //AddToCart Overlay decides if it should be visible via this variable
        itemCount, //AddToCart displays the current number of products to be added to cart
        handleItemClicked, //ProductItem uses this function to report when a product is clicked and AddToCart must be displayed
        handleAddToCartClose, //AddToCart uses this function to report the user clicked somewhere else and we need to close the overlay
        handleItemCountDecrement, //Count selector uses this function to decrease itemCount
        handleItemCountIncrement, //Count selector uses this function to increase itemCount
        selectedItem,
        selectedSize,
        handleSizeSelection,
        selectedCrust,
        handleCrustSelection,
        removedIngredients,
        handleRemoveIngredient,
        handleExtraSelection,
        selectedExtras,
        cart,
        cartVisible,
        handleCartClose,
        handleCartShow,
        handleIncreaseItemCount,
        handleDecreaseItemCount,
        handleRemoveItem,
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
        handleClearCheckout,
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
        checkoutVisible,
        handleCheckoutShow,
        handleCheckoutClose,
        handleOrderNow,
        checkoutError,
        formErrorList,
        orderStatusVisible,
        handleOrderStatusShow,
        handleOrderStatusClose,
        viewedOrderNumber,
        checkOrderVisible,
        checkOrderNumber,
        checkOrderPhone,
        setCheckOrderNumber,
        setCheckOrderPhone,
        handleCheckOrder,
        handleCheckOrderShow,
        handleCheckOrderClose,
        checkOrderError,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
