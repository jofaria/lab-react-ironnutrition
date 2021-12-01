import { Card, Col, Divider, Button } from "antd";

function FoodBox({ foodsObj, deleteFood }) {
  return (
    <Col>
      <Card
        title={foodsObj.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={foodsObj.image} height={60} alt="meal" />
        <p>Calories: {foodsObj.calories}</p>
        <p>Servings: {foodsObj.servings}</p>
        <p>
          <b>Total Calories: {foodsObj.calories * foodsObj.servings}</b>
          kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(foodsObj.name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
