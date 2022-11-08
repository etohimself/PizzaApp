import { createContext, useState } from "react";
import { uuidv4 } from "../Helpers/uuid.js";
export const AppContext = createContext();

export function AppContextProvider(props) {
  //=================================================== STATE =================================================================0
  const [productDB, setProductDB] = useState([
    {
      id: uuidv4(),
      img: "pizza1.png",
      name: "Sausage Pizza",
      description:
        "Classic Italian Pizza with Tomato sauce, sausages and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        { name: "Small", extraPrice: 0 },
        { name: "Medium", extraPrice: 4.75 },
        { name: "Large", extraPrice: 8.9 },
      ],
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "pizza2.png",
      name: "Mediterrian",
      description: "Cheese, olives, Tomatoes, sauce, classic taste.",
      price: 12.9,
      productType: 2,
      sizes: [
        { name: "Small", extraPrice: 0 },
        { name: "Medium", extraPrice: 4.75 },
        { name: "Large", extraPrice: 8.9 },
      ],
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "pizza3.png",
      name: "Mixed",
      description: "Two slices of Pizza house’s selection.",
      price: 16.9,
      productType: 1,
      sizes: [
        { name: "Small", extraPrice: 0 },
        { name: "Medium", extraPrice: 4.75 },
        { name: "Large", extraPrice: 8.9 },
      ],
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "pizza4.png",
      name: "Mushroom",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        { name: "Small", extraPrice: 0 },
        { name: "Medium", extraPrice: 4.75 },
        { name: "Large", extraPrice: 8.9 },
      ],
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "pizza5.png",
      name: "Veggy",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 16.9,
      productType: 1,
      sizes: [
        { name: "Small", extraPrice: 0 },
        { name: "Medium", extraPrice: 4.75 },
        { name: "Large", extraPrice: 8.9 },
      ],
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "pizza6.png",
      name: "Pepperoni",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        { name: "Small", extraPrice: 0 },
        { name: "Medium", extraPrice: 4.75 },
        { name: "Large", extraPrice: 8.9 },
      ],
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "pizza7.png",
      name: "Cheesy",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        { name: "Small", extraPrice: 0 },
        { name: "Medium", extraPrice: 4.75 },
        { name: "Large", extraPrice: 8.9 },
      ],
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "pizza8.png",
      name: "Gamer",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 16.9,
      productType: 1,
      sizes: [
        { name: "Small", extraPrice: 0 },
        { name: "Medium", extraPrice: 4.75 },
        { name: "Large", extraPrice: 8.9 },
      ],
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "pizza9.png",
      name: "Buffalo",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: [
        { name: "Small", extraPrice: 0 },
        { name: "Medium", extraPrice: 4.75 },
        { name: "Large", extraPrice: 8.9 },
      ],
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "cocacola.png",
      name: "CocaCola",
      description: "220ml coca cola.",
      price: 2.9,
      productType: 4,
      sizes: [
        { name: "220ml", extraPrice: 0 },
        { name: "330ml", extraPrice: 1.2 },
        { name: "1LT", extraPrice: 5.75 },
      ],
    },
    {
      id: uuidv4(),
      img: "fanta.png",
      name: "Fanta",
      description: "220ml fanta.",
      price: 2.9,
      productType: 4,
      sizes: [
        { name: "220ml", extraPrice: 0 },
        { name: "330ml", extraPrice: 1.2 },
        { name: "1LT", extraPrice: 5.75 },
      ],
    },
    {
      id: uuidv4(),
      img: "pepsi.png",
      name: "Pepsi",
      description: "220ml pepsi.",
      price: 2.9,
      productType: 4,
      sizes: [
        { name: "220ml", extraPrice: 0 },
        { name: "330ml", extraPrice: 1.2 },
        { name: "1LT", extraPrice: 5.75 },
      ],
    },
    {
      id: uuidv4(),
      img: "sprite.png",
      name: "Sprite",
      description: "220ml sprite",
      price: 2.9,
      productType: 4,
      sizes: [
        { name: "220ml", extraPrice: 0 },
        { name: "330ml", extraPrice: 1.2 },
        { name: "1LT", extraPrice: 5.75 },
      ],
    },
    {
      id: uuidv4(),
      img: "deal1.png",
      name: "Double Mix",
      description: "2x Large Mixed Pizzas, 1x Coca Cola 1Lt",
      price: 32.49,
      productType: 3,
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "deal2.png",
      name: "Triplex",
      description: "3x Large Gamer Pizzas, 1.5Lt CocaCola",
      price: 32.49,
      productType: 3,
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
    {
      id: uuidv4(),
      img: "deal3.png",
      name: "Sprite Menu",
      description: "2x Large Mixed Pizzas, 1Lt Sprite",
      price: 42.8,
      productType: 3,
      crusts: [
        { name: "Classic", extraPrice: 0 },
        { name: "Wheat Thin Crust", extraPrice: 0.5 },
        { name: "Cheese Burs", extraPrice: 2.75 },
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
        { name: "Cheese", price: 0.85 },
        { name: "Onions", price: 0.5 },
        { name: "Sausages", price: 1.2 },
      ],
    },
  ]);

  const [cart, setCart] = useState([]);
  const [currentSelection, setCurrentSelection] = useState(2);
  const [isAddToCartVisible, setAddToCartVisible] = useState(0);
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
  const [creditCardExpirationMonth, setCreditCardExpirationMonth] = useState("");
  const [creditCardExpirationYear, setCreditCardExpirationYear] = useState("");
  const [creditCardCVV2, setCreditCardCVV2] = useState("");
  

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
  };

  return (
    <AppContext.Provider
      value={{
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
        setCreditCardCVV2
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
