import styles from "./FoodSlicer.module.css";
import SlicerItem from "./SlicerItem.js";

function FoodSlicer(props) {
  return (
    <div className={styles.FoodSlicerContainer}>
      <SlicerItem img="slicer1.png" id="1">
        Special
        <br />
        Pizzas
      </SlicerItem>
      <SlicerItem img="slicer2.png" id="2">
        Classic
        <br />
        Pizzas
      </SlicerItem>
      <SlicerItem img="slicer3.png" id="3">
        Our
        <br />
        Deals
      </SlicerItem>
      <SlicerItem img="slicer4.png" id="4">
        Drinks
      </SlicerItem>
    </div>
  );
}

export default FoodSlicer;
