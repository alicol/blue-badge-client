import React from "react";
import '../index.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
    useState
} from "react";
import APIURL from "../helpers/environment";



const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit function ran");
        fetch(`${APIURL}user/login`, {
                method: "POST",
                body: JSON.stringify({
                    user: {
                        email: email,
                        password: password
                    },
                }),
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                props.setUserId(data.user.id);
                props.setUserName(data.user.name);
                props.updateToken(data.sessionToken);
                console.log("logged in!")
            });
    };

    return ( <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
centered>
        <Modal.Header closeButton>
        <Modal.Title id = "contained-modal-title-vcenter">
        Login </Modal.Title> </Modal.Header> <Modal.Body>
        <Form onSubmit = {handleSubmit}>
        <Form.Group controlId = "formBasicEmail" >
        <Form.Label> Email address </Form.Label> <Form.Control type = "email"
        placeholder = "Enter email"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        name = "email"
        value = {
            email
        }/> <Form.Text className = "text-muted">We 'll never share your email with anyone else. </Form.Text> </Form.Group>

        <Form.Group controlId="formBasicPassword" >
    <Form.Label> Password </Form.Label> 
<Form.Control type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        value={password} /> 
        </Form.Group>

        <Button variant="primary"
        type="submit" >
        Submit </Button> 
        </Form> 
        </Modal.Body> 
        </Modal>
    );
}



export default Login;