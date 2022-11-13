import { useState } from "react";
import styles from "./Button1.module.css";

function Button1(props) {
  const [executionStarted, setExecutionStarted] = useState(0);

  const delayedExecution = (functionToExecute) => {
    if (executionStarted) return;

    if (props.delayed) {
      setExecutionStarted(1);
      setTimeout(() => {
        setExecutionStarted(0);
        functionToExecute();
      }, props.delayed * 1000);
    } else {
      functionToExecute();
    }
  };

  return (
    <div
      className={`${styles.ButtonContainer} ${props.className} ${
        executionStarted && styles.executing
      }`}
      onClick={props.onClick ? () => delayedExecution(props.onClick) : null}
      id={props.id}
    >
      {props.children}
      {executionStarted ? <i className="fas fa-spinner fa-spin"></i> : ""}
    </div>
  );
}

export default Button1;
