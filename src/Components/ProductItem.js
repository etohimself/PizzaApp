import styles from "./ProductItem.module.css";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

function ProductItem(props) {
  const { handleItemClicked } = useContext(AppContext);

  return (
    <div
      className={styles.ProductItemOuterContainer}
      onClick={() => handleItemClicked(props.id)}
    >
      <img src={props.img} width="150" height="150" />
      <div
        className={`${styles.ProductItemInnerContainer} ${
          props.productType == 4 ? styles.isDrink : ""
        }`}
      >
        <div className={styles.ProductName}>{props.name}</div>
        <div className={styles.ProductDescription}>{props.description}</div>
        <div className={styles.ProductPrice}>
          ${" "}
          {props.price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            useGrouping: false,
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
