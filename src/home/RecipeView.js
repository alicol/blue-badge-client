import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Sidebar';

const RecipeView = (props) => {



    return (
        <div>
            <Header>
             <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nothing for now
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          </Header>

      {/* <Router>
               <Sidebar />
      </Router> */}
<Footer>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </Footer>
           
        </div>
    )
};

export default RecipeView;