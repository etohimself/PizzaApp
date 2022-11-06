import styles from "./FoodSlicer.module.css";
import SlicerItem from "./SlicerItem.js";

function FoodSlicer(props) {
  return (
    <div className={styles.FoodSlicerContainer}>
      <SlicerItem img="Slicer1.png" id="1">
        Special
        <br />
        Pizzas
      </SlicerItem>
      <SlicerItem img="Slicer2.png" id="2">
        Classic
        <br />
        Pizzas
      </SlicerItem>
      <SlicerItem img="Slicer3.png" id="3">
        Our
        <br />
        Deals
      </SlicerItem>
      <SlicerItem img="Slicer4.png" id="4">
        Drinks
      </SlicerItem>
    </div>
  );
}

export default FoodSlicer;
