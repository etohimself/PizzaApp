import styles from "./Step.module.css";

function Step(props) {
  return (
    <div className={`${styles.StepContainer} ${props.done && styles.isDone}`}>
      <div className={styles.CirclePlaceHolder}></div>
      <img src="/svg/stepdone.svg"></img>
      <p>{props.children}</p>
    </div>
  );
}

export default Step;
