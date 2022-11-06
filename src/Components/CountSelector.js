import styles from "./CountSelector.module.css";

function CountSelector(props) {
  return (
    <div className={styles.CountSelectorContainer}>
      <i className="fa fa-minus" onClick={props.onDecrement} style={{fontSize:props.iconSize}}></i>
      <div className={styles.CurrentCountLabel} style={{fontSize:props.fontSize}}>{props.value}</div>
      <i className="fa fa-plus" onClick={props.onIncrement} style={{fontSize:props.iconSize}}></i>
    </div>
  );
}

export default CountSelector;
