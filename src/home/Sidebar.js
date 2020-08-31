import {
Route,
Link,
Switch,
BrowserRouter as Router, Redirect
} from 'react-router-dom';
import Resources from './Resources';
import RecipeTable from "./RecipeTable";
import React from 'react';


const Sidebar = (props) => {
    
    return (
        <div>
        <div id="link-flexbox">
    <Link to='/recipe'><p class="switch-links" id="recipes-button">Recipes</p></Link>
        <p> | </p>
        <Link to="/resources"><p class="switch-links" id="resources-button">Resources</p></Link>
        </div>
      <div>
         <Switch>
            
             <Route exact path="/recipe"><RecipeTable recipes={props.recipes}
                    fetchRecipes={props.fetchRecipes}
                    token={props.token} 
                    setModalShow={props.setModalShow}
                    setRecipeToView={props.setRecipeToView}
                    setRecipeToUpdate={props.setRecipeToUpdate}
                    setUpdateModalShow={props.setUpdateModalShow}
                    setDeleteModalShow={props.setDeleteModalShow}
                    setRecipeToDelete={props.setRecipeToDelete}
                    userId={props.userId}/></Route>
             <Route exact path="/resources"><Resources /></Route>
         </Switch>
      </div>
      </div>

      
    )
}

export default Sidebar;