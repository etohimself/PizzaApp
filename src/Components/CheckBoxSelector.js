import styles from "./CheckBoxSelector.module.css";

function CheckBoxSelector(props) {
  return (
    <div className={styles.CheckBoxSelectorContainer}>
      <h1>{props.title}</h1>

      {props.itemList.map((eachItem, index) => (
        <div
          className={styles.selectionContainer}
          onClick={() => props.selectionHandler(index)}
          key={index}
        >
          <div className={styles.selectionBox}>
            <i
              className={`fa fa-check ${
                props.selectedItems.includes(index) ? styles.isVisible : ""
              }`}
            ></i>
          </div>
          {eachItem.name}
        </div>
      ))}
    </div>
  );
}

export default CheckBoxSelector;
