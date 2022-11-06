import styles from "./RemoveSelector.module.css";

function RemoveSelector(props) {
  return (
    <div className={styles.RemoveSelectorContainer}>
      <h1>{props.title}</h1>
      <div className={styles.RemovablesContainer}>
        {props.itemList.map((eachItem, index) => (
          <div
            className={`${styles.selectionContainer} ${
              !props.removedItems.includes(index) && styles.isVisible
            }`}
            key={index}
          >
            {eachItem}
            <i
              className="fa-solid fa-square-xmark"
              onClick={() => props.removeHandler(index)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RemoveSelector;
