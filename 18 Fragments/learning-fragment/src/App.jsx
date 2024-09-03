import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  let foodItems = ['Tea','Roti','Milk','Green Vegetables','Rice',"Ghee"];

  return (

      <>
      <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems}>
      </ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
      </Container>

      

      {/* 
      <Container>
        <p>
          Above is the list of healthy foods that are good for health and 
          Well being.
        </p>
      </Container> 
      */}

      </>

      
  );
}
export default App;
