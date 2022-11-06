import styles from "./Button1.module.css";

function Button1(props) {
    return (
        <div className={`${styles.ButtonContainer} ${props.className}`} onClick={props.onClick}>
              {props.children}
        </div>
    )
}

export default Button1;