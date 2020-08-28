import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RecipeView from "./RecipeView";


const RecipeTable = (props) => {


  

    const recipeMapper = () => {
        return props.recipes.map((recipe, index) => {

          

        const specificMonth = (recipe) => {
           
          const string = recipe.createdAt;
          let month = string.substr(5,2);

          switch (month) {
            case "01":
              return "January";
              break;
            case "02": 
              return "February";
              break;
            case "03":
              return "March";
              break;
            case "04":
              return "April";
              break;
            case "05":
              return "May";
              break;
            case "06":
              return "June";
              break;
            case "07":
              return "July";
              break;
            case "08":
              return "August";
              break;
            case "09":
              return "September";
              break;
            case "10":
              return "October";
              break;
            case "11":
              return "November";
              break;
            case "12":
              return "December";
              break; 
            default: 
               return "default month"
               break;
          } 
        }

        const specificDay = (recipe) => {
          const string = recipe.createdAt;
          let day = string.substr(8,2);
          if (day.substr(0,1) == 0){
            return day.substr(1,1)
          } else {
            return day;
          }
        }

        const specificYear = (recipe) => {
          const string = recipe.createdAt;
          let year = string.substr(0,4)
          return year;
        }

         
          
            return (
                <div class="card-style">
                <Card>
  
  <Card.Body class="card-body-style">
    <Card.Title class="card-title-style">{recipe.recipeName}</Card.Title>
    <Card.Text class="card-text-style">
      {`${recipe.category}   -    Rating: ${recipe.rating}/5`}
    </Card.Text>
    <Button variant="primary" id="card-button-style" onClick={() => {props.setModalShow(true); props.setRecipeToView(recipe)}}>View</Button>
    <Button variant="primary" id="card-button-style" onClick={() => {props.setUpdateModalShow(true); props.setRecipeToUpdate(recipe)}}>Edit</Button>
    <Button variant="primary" id="card-button-style" onClick={() => {props.setDeleteModalShow(true); props.setRecipeToDelete(recipe)}}>Delete</Button>
  </Card.Body>
  <Card.Footer class="card-date-style"><p class="card-date-text">Updated: {`${specificMonth(recipe)} ${specificDay(recipe)}, ${specificYear(recipe)}`}</p></Card.Footer>
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