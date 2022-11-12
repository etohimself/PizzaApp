import styles from "./StepsGraph.module.css";

function StepsGraph(props) {
  return (
    <div className={styles.StepsGraphContainer}>
      <div className={styles.processLine}></div>
      <div className={styles.processLine2}></div>
      {props.children}
    </div>
  );
}

export default StepsGraph;
