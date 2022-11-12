import styles from "./StepsGraph.module.css";

function StepsGraph(props) {
  return (
    <div className={styles.StepsGraphContainer}>
      {props.children}
    </div>
  );
}

export default StepsGraph;
