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
import APIUSER from '../helpers/environment';
import RecipeView from './RecipeView';
import RecipeEdit from './RecipeEdit';
import RecipeDelete from './RecipeDelete';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Sidebar';


const RecipeIndex = (props) => {
const [recipes, setRecipes] = useState([]);
const [createModalShow, setCreateModalShow] = useState(false);
const [modalShow, setModalShow] = useState(false);
const [updateModalShow, setUpdateModalShow] = useState(false);
const [recipeToView, setRecipeToView] = useState({});
const [recipeToUpdate, setRecipeToUpdate] = useState({});
const [deleteModalShow, setDeleteModalShow] = useState(false);
const [recipeToDelete, setRecipeToDelete] = useState({});
const [keyword, setKeyword] = useState("");

const getRecipes = () => {

    const fetchRecipes = () => {
        fetch(`${APIUSER}recipe/get/${props.userId}`, {
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

    const fetchKeyword = () => {
        fetch(`${APIUSER}recipe/search/${keyword}`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: props.token,
            }),
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData[0]);
            setRecipes(logData[0]);
        });
    }    


if (keyword === ''){
  fetchRecipes(); 
} else {
    fetchKeyword();
}
}

//CHECK THIS!!!!!!!
useEffect(() => {
        getRecipes();}, []); 


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
                    <h1 id="name-header">{`${props.userName}'s`}</h1>
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
     
      aria-describedby="basic-addon2"
      name="keyword"
      value={keyword}
      onChange={(e)=> setKeyword(e.target.value)}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" id="index-search-button" onClick={getRecipes}>Search</Button>
    </InputGroup.Append>
  </InputGroup>

                    </div>
                    <Router>
                    <Sidebar recipes={recipes}
                    getRecipes={getRecipes}
                    token={props.token} 
                    setModalShow={setModalShow}
                    setRecipeToView={setRecipeToView}
                    setRecipeToUpdate={setRecipeToUpdate}
                    setUpdateModalShow={setUpdateModalShow}
                    setDeleteModalShow={setDeleteModalShow}
                    setRecipeToDelete={setRecipeToDelete}
                    userId={props.userId}
                    />

                   </Router>

                </div>
                </Col>
            </Row>
        </Container>
        <div>
        <RecipeCreate
          show={createModalShow}
          onHide={() => setCreateModalShow(false)}
      
          token={props.token}
          getRecipes={getRecipes}
        />

        <RecipeView
          show={modalShow}
          onHide={() => setModalShow(false)}
        
          token={props.token}
          recipeToView={recipeToView}
          
        />

        <RecipeEdit
        show={updateModalShow}
        onHide={() => setUpdateModalShow(false)}
        
        token={props.token}
        recipeToUpdate={recipeToUpdate} 
        getRecipes={getRecipes} />

        <RecipeDelete
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        token={props.token}
        recipeToDelete={recipeToDelete}
        getRecipes={getRecipes}
        />
        
        </div>
        <div id="index-bottom-pic"></div>
        </div>
    )
}

export default RecipeIndex;