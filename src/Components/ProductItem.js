import styles from "./ProductItem.module.css";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import priceFormat from "../Helpers/priceFormat";

function ProductItem(props) {
  const { handleItemClicked } = useContext(AppContext);

  const productSpecificStyle = () => {
    if (props.productType == 4) {
      return styles.isDrink;
    } else if (props.productType == 3) {
      return styles.isDeal;
    }
    return "";
  };

  return (
    <div
      className={`${styles.ProductItemContainer} ${productSpecificStyle()}`}
      onClick={() => handleItemClicked(props.id)}
    >
      <div className={styles.ProductItemLeftInner}>
        <img src={props.img} />
      </div>
      <div className={styles.ProductItemRightInner}>
        <div className={styles.ProductName}>{props.name}</div>
        <div className={styles.ProductDescription}>{props.description}</div>
        <div className={styles.ProductPrice}>$ {priceFormat(props.price)}</div>
      </div>
    </div>
  );
}

export default ProductItem;
