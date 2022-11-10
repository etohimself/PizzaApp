import styles from "./CheckBox.module.css";

function CheckBox(props) {
  return (
    <div className={`${styles.CheckBox} ${props.className}`} onClick={props.onClick}>
        <i className={`fa fa-check ${props.value && styles.isVisible}`}
        ></i>
    </div>
  );
}

export default CheckBox;
