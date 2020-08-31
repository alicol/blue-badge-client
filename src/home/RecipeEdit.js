import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import APIURL from '../helpers/environment';





const RecipeEdit = (props) => {
    const [editRecipeName, setEditRecipeName] = useState(props.recipeToUpdate.recipeName);
    const [editCategory, setEditCategory] = useState(props.recipeToUpdate.category);
    const [editSource, setEditSource] = useState(props.recipeToUpdate.source);
    const [editYieldAmount, setEditYieldAmount] = useState(props.recipeToUpdate.yieldAmount);
    const [editIngredients, setEditIngredients] = useState(props.recipeToUpdate.ingredients);
    const [editDirections, setEditDirections] = useState(props.recipeToUpdate.directions);
    const [editNotes, setEditNotes] = useState(props.recipeToUpdate.notes);
    const [editRating, setEditRating] = useState(props.recipeToUpdate.rating);
    
   
       
       const editRecipe = (e, recipe) => {
           e.preventDefault();
        // e.handleSubmit();
        fetch(`${APIURL}recipe/update/${props.recipeToUpdate.id}`, {
            method: "PUT",
            body: JSON.stringify({
                recipe: {
                    recipeName: editRecipeName,
                    category: editCategory,
                    source: editSource,
                    yield: editYieldAmount,
                    ingredients: editIngredients,
                    directions: editDirections,
                    notes: editNotes,
                    rating: editRating,
                },
                }),
                headers: new Headers({
                    "Content-Type": "application/json",
                   Authorization: props.token,
                    
                }),
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            // setEditRecipeName('');
            // setEditCategory('');
            // setEditSource('');
            // setEditYieldAmount('');
            // setEditIngredients('');
            // setEditDirections('');
            // setEditNotes('');
            // setEditRating('');
            props.getRecipes();
            props.onHide();
            console.log('editRecipeName');
            
        });
    };
    return ( <div>



    <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
centered>
        <Modal.Header closeButton>
        <Modal.Title id = "contained-modal-title-vcenter">
        Edit Recipe </Modal.Title> </Modal.Header> <Modal.Body>
        <Form onSubmit = {editRecipe}>
       
        <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control placeholder="Recipe title" defaultValue={props.recipeToUpdate.recipeName} name="recipeName" value={editRecipeName} onChange={(e) => setEditRecipeName(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Category</Form.Label>
      <Form.Control as="select" placeholder="Select Category" defaultValue={props.recipeToUpdate.category} name="category" value={editCategory} onChange={(e) => setEditCategory(e.target.value)} >
        <option value={null}>Category...</option>
        <option value="Main">Main</option>
        <option value="Apps & Snacks">Apps & Snacks</option>
        <option value="Sides">Sides</option>
        <option value="Breads">Breads</option>
        <option value="Desserts">Desserts</option>
        <option value="Drinks">Drinks</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Ingredients</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="List ingredients..." defaultValue={props.recipeToUpdate.ingredients} name="ingredients" value={editIngredients} onChange={(e) => setEditIngredients(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Directions</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="List directions..." defaultValue={props.recipeToUpdate.directions} name="directions" value={editDirections} onChange={(e) => setEditDirections(e.target.value)}/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Notes</Form.Label>
    <Form.Control as="textarea" rows="2" placeholder="Your notes" defaultValue={props.recipeToUpdate.notes} name="notes" value={editNotes} onChange={(e) => setEditNotes(e.target.value)}/>
  </Form.Group>

  <Form.Row>
    <Form.Group controlId="formBasicRange" as={Col}>
    <Form.Label>Rating</Form.Label>

    <Form.Control type="range" value={editRating} onChange={e => setEditRating(e.target.value)} defaultValue={props.recipeToUpdate.rating} max={5} name="rating" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Yield</Form.Label>
      <Form.Control defaultValue={props.recipeToUpdate.yields} placeholder="Number of servings" value={editYieldAmount} name="yieldAmount" onChange={(e) => setEditYieldAmount(e.target.value)}/>
    </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridZip">
      <Form.Label>Source</Form.Label>
      <Form.Control defaultValue={props.recipeToUpdate.source} placeholder="Name, URL or Cookbook" name="source" value={editSource} onChange={(e) => setEditSource(e.target.value)}/>
    </Form.Group>
  

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Favorite" />
  </Form.Group>

        <Button variant="primary"
        type="submit" >
        Submit </Button> 
        </Form> 
        </Modal.Body> 
        </Modal>

        

</div>
  
       
 
  
    )
}

export default RecipeEdit;