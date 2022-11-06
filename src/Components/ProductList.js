import { useContext } from "react";
import ProductItem from "./ProductItem.js";
import styles from "./ProductList.module.css";
import { AppContext } from "../Contexts/AppContext";

function ProductList(props) {
  const { filteredProducts } = useContext(AppContext);
  return (
    <div className={styles.ProductListContainer}>
      {filteredProducts.map((eachProduct) => {
        return <ProductItem {...eachProduct} />;
      })}
      <i aria-hidden="true"></i>
      <i aria-hidden="true"></i>
      <i aria-hidden="true"></i>
      <i aria-hidden="true"></i>
      <i aria-hidden="true"></i>
    </div>
  );
}

export default ProductList;
