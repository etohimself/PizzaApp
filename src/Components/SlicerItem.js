import { useContext, useState } from "react";
import { AppContext } from "../Contexts/AppContext.js";
import styles from "./SlicerItem.module.css";

function SlicerItem(props) {
  const { currentSelection, updateSelection } = useContext(AppContext);
  const [imgLoaded, setImgLoaded] = useState(0);

  return (
    <div
      className={` ${styles.SlicerItemContainer} ${
        currentSelection == props.id ? styles.isSelected : ""
      } ${!imgLoaded && styles.loading}`}
      onClick={() => updateSelection(props.id)}
    >
      <img
        src={props.img}
        key={props.img}
        width="100"
        height="100"
        onLoad={() => setImgLoaded(1)}
      />
      {imgLoaded ? props.children : ""}
    </div>
  );
}

export default SlicerItem;
