import React, {useState, useEffect} from "react";
import '../index.css';
import RecipeCreate from "./RecipeCreate";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RecipeTable from './RecipeTable';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


const RecipeIndex = (props) => {
const [recipes, setRecipes] = useState([]);
const [createModalShow, setCreateModalShow] = React.useState(false);

const fetchRecipes = () => {
    fetch('http://localhost:3000/recipe/get', {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: props.token,
        }),
    })
    .then((res) => res.json())
    .then((logData) => {
        setRecipes(logData);
        
    });
}

useEffect(() => {
    fetchRecipes();
}, []);

    return (
        <div id="blue-background">
            <div id="index-top-pic">
                <div id="index-logout">
            <Button variant="primary" size="sm" onClick={props.clickLogout}>
      Logout
    </Button>
    </div>
            </div>
            <Container>
                <Row>
                <Col xs={12} md={5}>
                    {/* <h1>{props.user.name}'s</h1> */} <h1 id="name-header">Name's</h1>
                    <h1 id="index-header">Recipe Box</h1>
                    <div id="center-button">
                    <Button variant="primary" size="lg" id="create-button" onClick={() => setCreateModalShow(true)}>+ Create</Button>
                    </div>
                </Col>
                <Col xs={12} md={7}>
                <div class="column">
                    <div id="index-searchbar">
                    <InputGroup className="mb-3">
    <FormControl
      placeholder="Keyword..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" id="index-search-button">Search</Button>
    </InputGroup.Append>
  </InputGroup>

                    </div>
                    <RecipeTable recipes={recipes}
                    fetchRecipes={fetchRecipes}
                    token={props.token} />
                </div>
                </Col>
            </Row>
        </Container>
        <div>
        <RecipeCreate
          show={createModalShow}
          onHide={() => setCreateModalShow(false)}
          updateToken={props.updateToken}
          token={props.token}
          fetchRecipes={fetchRecipes}
        />
        </div>
        <div id="index-bottom-pic"></div>
        </div>
    )
}

export default RecipeIndex;