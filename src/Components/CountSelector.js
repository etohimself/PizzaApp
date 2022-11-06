import styles from "./CountSelector.module.css";

function CountSelector(props) {
  return (
    <div className={`${styles.CountSelectorContainer} ${props.size == "small" && styles.small}`}>
      <i className="fa fa-minus" onClick={props.onDecrement}></i>
      <div className={styles.CurrentCountLabel}>{props.value}</div>
      <i className="fa fa-plus" onClick={props.onIncrement}></i>
    </div>
  );
}

export default CountSelector;
