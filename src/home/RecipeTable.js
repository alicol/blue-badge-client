import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RecipeTable = (props) => {


    const recipeMapper = () => {
        return props.recipes.map((recipe, index) => {
            return (
                <div class="card-style">
                <Card>
  
  <Card.Body class="card-body-style">
    <Card.Title class="card-title-style">{recipe.recipeName}</Card.Title>
    <Card.Text class="card-text-style">
      {`${recipe.category}   -    Rating: ${recipe.rating}/5`}
    </Card.Text>
    <Button variant="primary" id="card-button-style">View</Button>
    <Button variant="primary" id="card-button-style">Edit</Button>
  </Card.Body>
  <Card.Footer class="card-date-style"><p class="card-date-text">Created: {recipe.createdAt}</p></Card.Footer>
</Card>
</div>
            )
        })
    };

    return (
       <div>
           {recipeMapper()}
       </div>
    )
}

export default RecipeTable;