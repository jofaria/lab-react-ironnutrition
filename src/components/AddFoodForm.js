import { Divider, Input } from "antd";
import { useState } from "react";
import { v4 as randomId } from "uuid";

// Iteration 4
function AddFoodForm({ addNewFoodHandler }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);

  // functions to handle setStates

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleCalories = (event) => {
    setCalories(event.target.value);
  };
  const handleImage = (event) => {
    setImage(event.target.value);
  };
  const handleServings = (event) => {
    setServings(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };

    addNewFoodHandler(newFood);
    console.log("new food added:", newFood);

    setName("");
    setCalories(0);
    setImage("");
    setServings(0);
  };

  // save the input coming from the form

  return (
    <form className="addFoodForm" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
