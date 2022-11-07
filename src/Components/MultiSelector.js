import styles from "./MultiSelector.module.css";

function MultiSelector(props) {
  return (
    <div className={styles.MultiSelectorContainer}>
      <h1>{props.title}</h1>

      {props.itemList.map((eachItem, index) => (
        <div
          className={styles.selectionContainer}
          onClick={() => props.changeHandler(index)}
          key={index}
        >
          <div className={styles.selectionCircle}>
            <div
              className={`${styles.selectionBoxFill} ${
                props.currentSelection == index ? styles.isVisible : ""
              }`}
            ></div>
          </div>
          {eachItem.name}
        </div>
      ))}
    </div>
  );
}

export default MultiSelector;
