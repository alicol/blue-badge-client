import React from "react";
import '../index.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import APIUSER from '../helpers/environment';



function Signup(props) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit function ran");
    fetch(`${APIUSER}user/create`, {
      method: "POST",
      body: JSON.stringify({
        user: { name: name, email: email, password: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.setUserId(data.user.id);
        props.setUserName(data.user.name);
        props.updateToken(data.sessionToken);
        console.log("logged in!")
      });
  };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Signup
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
          
        <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Name" onChange={(e) => setName(e.target.value)}
    name="name"
    value={name} />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
    name="email"
    value={email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
    name="password"
    value={password} />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Modal.Body>
      
      </Modal>
    );
  }
  
  
  
  export default Signup;