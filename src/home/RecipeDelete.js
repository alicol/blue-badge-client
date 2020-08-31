import React from "react";
import APIURL from '../helpers/environment';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const RecipeDelete = (props) => {


    const deleteRecipe = (recipe) => {
        fetch(`${APIURL}recipe/delete/${props.recipeToDelete.id}`,
        {
            method: "DELETE",
            headers: new Headers({
            "Content-Type": "application/json",
            Authorization: props.token,
        }),
    })
        .then(() => props.getRecipes());
        props.onHide();

    };

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
        Are you sure you want to permanently delete this recipe?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="outline-danger" onClick={deleteRecipe}>Delete</Button>
      </Modal.Body>
    </Modal>

        </div>
    )
}

export default RecipeDelete;