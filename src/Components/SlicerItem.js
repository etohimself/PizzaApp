import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext.js";
import styles from "./SlicerItem.module.css";

function SlicerItem(props) {
  const { currentSelection, updateSelection } = useContext(AppContext);
  return (
    <div
      className={` ${styles.SlicerItemContainer} ${
        currentSelection == props.id ? styles.isSelected : ""
      } `}
      onClick={() => updateSelection(props.id)}
    >
      <img src={props.img} width="100" height="100" />
      {props.children}
    </div>
  );
}

export default SlicerItem;
