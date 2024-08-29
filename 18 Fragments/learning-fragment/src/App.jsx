// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  let foodItems = ['Tea','Roti','Milk','Green Vegetables','Rice',"Ghee"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item)=><li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </>
  );
}
export default App;
