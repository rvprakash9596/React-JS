import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  let foodItems = ['Tea','Roti','Milk','Green Vegetables','Rice',"Ghee"];

  return (
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems}>
      </ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}
export default App;
