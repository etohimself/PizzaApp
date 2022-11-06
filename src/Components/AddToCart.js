import { useContext, useCallback, useEffect } from "react";
import styles from "./AddToCart.module.css";
import CountSelector from "./CountSelector.js";
import { AppContext } from "../Contexts/AppContext";
import MultiSelector from "./MultiSelector.js";
import RemoveSelector from "./RemoveSelector.js";
import CheckBoxSelector from "./CheckBoxSelector";
import Button1 from "./Button1";

function AddToCart() {
  const {
    isAddToCartVisible,
    handleAddToCart,
    itemCount,
    handleItemCountDecrement,
    handleItemCountIncrement,
    handleAddToCartClose,
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
  } = useContext(AppContext);
  const priceText = (
    (selectedItem.price + selectedExtras.length * extraPrice) *
    itemCount
  ).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    useGrouping: false,
  });

  const escFunction = useCallback((event) => {
    //Lets memorize the escFunction to improve performance
    if (event.key === "Escape") {
      handleAddToCartClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const closeMe = (event) => {
    event.target == event.currentTarget && handleAddToCartClose();
  };

  const sizesAvailable =
    selectedItem.hasOwnProperty("sizes") && selectedItem.sizes.length > 0;
  const crustsAvailable =
    selectedItem.hasOwnProperty("crusts") && selectedItem.crusts.length > 0;
  const ingredientsAvailable =
    selectedItem.hasOwnProperty("ingredients") &&
    selectedItem.ingredients.length > 0;
  const extrasAvailable =
    selectedItem.hasOwnProperty("extras") && selectedItem.extras.length > 0;

  return (
    <div
      className={`${styles.AddToCartOverlay} ${
        isAddToCartVisible && styles.isVisible
      }`}
      onClick={closeMe}
    >
      <div className={styles.AddToCartContainer}>
        <div className={styles.InfoContainer}>
          <div className={styles.DescriptionContainer}>
            <img src={selectedItem.img} />
            <div className={styles.DescriptionTextArea}>
              <h1>{selectedItem.name}</h1>
              <p>{selectedItem.description}</p>
            </div>
          </div>
          <div className={styles.PreferenceContainer}>
            {sizesAvailable && (
              <MultiSelector
                itemList={[...selectedItem.sizes]}
                currentSelection={selectedSize}
                changeHandler={handleSizeSelection}
                title="Choose Your Size :"
              />
            )}
            {crustsAvailable && (
              <MultiSelector
                itemList={[...selectedItem.crusts]}
                currentSelection={selectedCrust}
                changeHandler={handleCrustSelection}
                title="Choose Your Crust :"
              />
            )}
            {ingredientsAvailable && (
              <RemoveSelector
                itemList={[...selectedItem.ingredients]}
                removedItems={removedIngredients}
                removeHandler={handleRemoveIngredient}
                title="Remove If You Don't Like :"
              />
            )}
            {extrasAvailable && (
              <CheckBoxSelector
                itemList={[...selectedItem.extras]}
                selectedItems={selectedExtras}
                selectionHandler={handleExtraSelection}
                title="Add Extra :"
              />
            )}
          </div>
        </div>
        <div className={styles.ActionContainer}>
          <h1 className={styles.PriceLabel}>${priceText}</h1>
          <div className={styles.ActionButtonsContainer}>
            <CountSelector
              onDecrement={handleItemCountDecrement}
              onIncrement={handleItemCountIncrement}
              value={itemCount}
            />
            <Button1 onClick={handleAddToCart}>
              Add To Cart
            </Button1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
