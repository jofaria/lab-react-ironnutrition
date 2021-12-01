import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { v4 as randomId } from "uuid";
import { Button, Row, Divider } from "antd";
import EmptyList from "./components/EmptyList";

function App() {
  const [foodsList, setFoodsList] = useState(foods);
  const [updatedFoodsList, setUpdatedFoodsList] = useState(foods);
  const [formShowing, setFormShowing] = useState(false);

  const toggleForm = () => setFormShowing(!formShowing);

  const addNewFood = (foodObj) => {
    const newUpdatedFoodsList = [foodObj, ...updatedFoodsList];
    const newFoodsList = [foodObj, ...foodsList];

    setFoodsList(newFoodsList);
    setUpdatedFoodsList(newUpdatedFoodsList);
  };

  const filterFoodList = (char) => {
    let filteredFoods;

    if (char === "") {
      filteredFoods = foodsList;
    } else {
      filteredFoods = foodsList.filter((eachFood) => {
        return eachFood.name.toLowerCase().includes(char.toLowerCase());
      });
    }
    setUpdatedFoodsList(filteredFoods);
  };

  const deleteFood = (foodName) => {
    const newUpdatedList = [...updatedFoodsList];
    const newList = [...foodsList];

    const afterDelete = newUpdatedList.filter((food) => {
      return food.name !== foodName;
    });

    setFoodsList(newList);
    setUpdatedFoodsList(afterDelete);
  };

  return (
    <div className="App">
      <div className="foodForm"></div>

      <Button onClick={toggleForm}>
        {formShowing ? "Hide Form" : "Add New Food"}
      </Button>
      {formShowing && <AddFoodForm addNewFoodHandler={addNewFood} />}

      <div className="filterForm">
        <Search filterFoodHandler={filterFoodList} />
      </div>
      <Divider>Food List</Divider>

      <div className="foodsList">
        {updatedFoodsList.length === 0 && <EmptyList />}

        {updatedFoodsList.map((food) => {
          return (
            <FoodBox foodsObj={food} deleteFood={deleteFood} key={randomId()} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
