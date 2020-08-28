import React, {useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Sidebar';
import APIURL from '../helpers/environment';

const RecipeView = (props) => {
    
    const fetchViewRecipe = () => {
        fetch(`{APIURL}get/${props.recipeToView.id}`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: props.token,
        })
    }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
        })
        
};

useEffect(() => {
    fetchViewRecipe();
}, []);

// useEffect(() => {
//     console.log(props.recipeToView.recipeName)
// })




    return (
        <div>
         
           
             <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.recipeToView.recipeName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

    <h5>Ingredients:</h5> 
    <p>{props.recipeToView.ingredients}</p>
    <h5>Directions:</h5>
    <p>{props.recipeToView.directions}</p>
    <h5>My Notes:</h5>
    <p>{props.recipeToView.notes}</p>
    <h7>{`Yield: ${props.recipeToView.yieldAmount}`}</h7>
    <br />
    


     
      </Modal.Body>
      <Modal.Footer>
      <h7 id="modal-footer-left-align">{`This recipe is from ${props.recipeToView.source}.`}</h7>
        <Button OnClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
   
           
        </div>
    )
};

export default RecipeView;