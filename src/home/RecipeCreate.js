
import React, {useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';

const { useState } = require("react")


const RecipeCreate = (props) => {
    const [recipeName, setRecipeName] = useState("");
    const [category, setCategory] = useState("");
    const [source, setSource] = useState("");
    const [yieldAmount, setYieldAmount] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [directions, setDirections] = useState("");
    const [notes, setNotes] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/recipe/create", {
            method: "POST",
            body: JSON.stringify({
                recipe: {
                    recipeName: recipeName,
                    category: category,
                    source: source,
                    yield: yieldAmount,
                    ingredients: ingredients,
                    directions: directions,
                    notes: notes,
                    rating: rating,
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
            setRecipeName('');
            setCategory('');
            setSource('');
            setYieldAmount('');
            setIngredients('');
            setDirections('');
            setNotes('');
            setRating('');
            props.fetchRecipes();
        });
    };
    return ( <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
centered>
        <Modal.Header closeButton>
        <Modal.Title id = "contained-modal-title-vcenter">
        Create Recipe </Modal.Title> </Modal.Header> <Modal.Body>
        <Form onSubmit = {handleSubmit}>
       
        <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control placeholder="Enter recipe name..." name="recipeName" value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Category</Form.Label>
      <Form.Control as="select" defaultValue="Category..." name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
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
    <Form.Control as="textarea" rows="3" placeholder="Enter ingredients, separated by commas..." name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Directions</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Enter directions..." name="directions" value={directions} onChange={(e) => setDirections(e.target.value)}/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Notes</Form.Label>
    <Form.Control as="textarea" rows="2" placeholder="Enter notes..." name="notes" value={notes} onChange={(e) => setNotes(e.target.value)}/>
  </Form.Group>

  <Form.Row>
    <Form.Group controlId="formBasicRange" as={Col}>
    <Form.Label>Rating</Form.Label>
    <Form.Control type="range" value={rating} onChange={e => setRating(e.target.value)} tooltip='auto' max={5} name="rating" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Yield</Form.Label>
      <Form.Control placeholder="Enter servings..." value={yieldAmount} name="yieldAmount" onChange={(e) => setYieldAmount(e.target.value)}/>
    </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridZip">
      <Form.Label>Source</Form.Label>
      <Form.Control placeholder="Enter URL, cookbook or person..." name="source" value={source} onChange={(e) => setSource(e.target.value)}/>
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
    )
}

export default RecipeCreate;