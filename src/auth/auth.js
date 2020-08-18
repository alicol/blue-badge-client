import React from "react";
import '../index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Login from './login';
import Signup from './signup';

// const BackgroundImage = styled.div`
// background-color: pink;`;



const Auth = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);

    return (
      <div id="img-wrapper">
        <Container>
          <Row>
            <Col>
              <h1 id="main-header">Recipe Box</h1>
            </Col>
          </Row>
          </Container>

            
       <div class="flexbox" id="login-signup-button">
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={() => setLoginModalShow(true)}>Login</Button>
              <Button variant="secondary" onClick={() => setModalShow(true)}>Signup</Button>
            </ButtonGroup>
            </div>
            <Login
          show={loginModalShow}
          onHide={() => setLoginModalShow(false)}
          updateToken={props.updateToken}
        />
        <Signup
          show={modalShow}
          onHide={() => setModalShow(false)}
          updateToken={props.updateToken}
        />
           
       </div>
    );
  };
  
  export default Auth;