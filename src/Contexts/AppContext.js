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
      description: "Classic Italian Pizza with Tomato sauce, sausages and cheese.",
      price: 12.9,
      productType: 2,
      sizes: ["Small", "Medium", "Large"],
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "pizza2.png",
      name: "Mediterrian",
      description: "Cheese, olives, Tomatoes, sauce, classic taste.",
      price: 12.9,
      productType: 2,
      sizes: ["Small", "Medium", "Large"],
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "pizza3.png",
      name: "Mixed",
      description: "Two slices of Pizza house’s selection.",
      price: 16.9,
      productType: 1,
      sizes: ["Small", "Medium", "Large"],
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "pizza4.png",
      name: "Mushroom",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: ["Small", "Medium", "Large"],
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "pizza5.png",
      name: "Veggy",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 16.9,
      productType: 1,
      sizes: ["Small", "Medium", "Large"],
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "pizza6.png",
      name: "Pepperoni",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: ["Small", "Medium", "Large"],
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "pizza7.png",
      name: "Cheesy",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: ["Small", "Medium", "Large"],
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "pizza8.png",
      name: "Gamer",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 16.9,
      productType: 1,
      sizes: ["Small", "Medium", "Large"],
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "pizza9.png",
      name: "Buffalo",
      description: "Classic Italian Pizza with Tomato sauce and cheese.",
      price: 12.9,
      productType: 2,
      sizes: ["Small", "Medium", "Large"],
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "cocacola.png",
      name: "CocaCola",
      description: "30cc coca cola.",
      price: 2.9,
      productType: 4,
      sizes: ["20cc", "30cc", "50cc"],
    },
    {
      id: uuidv4(),
      img: "fanta.png",
      name: "Fanta",
      description: "30cc fanta.",
      price: 2.9,
      productType: 4,
      sizes: ["20cc", "30cc", "50cc"],
    },
    {
      id: uuidv4(),
      img: "pepsi.png",
      name: "Pepsi",
      description: "30cc pepsi.",
      price: 2.9,
      productType: 4,
      sizes: ["20cc", "30cc", "50cc"],
    },
    {
      id: uuidv4(),
      img: "sprite.png",
      name: "Sprite",
      description: "30cc sprite",
      price: 2.9,
      productType: 4,
      sizes: ["20cc", "30cc", "50cc"],
    },
    {
      id: uuidv4(),
      img: "deal1.png",
      name: "Double Mix",
      description: "2x Large Mixed Pizzas, 1x Coca Cola 1Lt",
      price: 32.49,
      productType: 3,
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "deal2.png",
      name: "Triplex",
      description: "3x Large Gamer Pizzas, 1.5Lt CocaCola",
      price: 32.49,
      productType: 3,
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
    },
    {
      id: uuidv4(),
      img: "deal3.png",
      name: "Sprite Menu",
      description: "2x Large Mixed Pizzas, 1Lt Sprite",
      price: 42.8,
      productType: 3,
      crusts: ["Wheat Thin Crust", "Cheese Burs", "Classic"],
      ingredients: [
        "Tomatoe",
        "Cheese",
        "Olive",
        "Pepperoni",
        "Sausage",
        "Onion",
      ],
      extras: ["Cheese", "Onions", "Sausages"],
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
  const [extraPrice, setExtraPrice] = useState(0.89);
  const [cartVisible, setCartVisible] = useState(0);

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
      count: itemCount,
      size: selectedSize,
      removed: removedIngredients,
      extras: selectedExtras,
      extraPrice: extraPrice, 
      crust: selectedCrust,
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
    if (selectedExtras.includes(selectedIndex)) {
      setSelectedExtras([...selectedExtras].filter((x) => x != selectedIndex));
    } else {
      setSelectedExtras([...selectedExtras, selectedIndex]);
    }
  };

  const handleCartClose = () =>{
    setCartVisible(0);
  }

  const handleCartShow = () => {
    setCartVisible(1);
  }


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
        extraPrice,
        cart,
        cartVisible,
        handleCartClose,
        handleCartShow
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
