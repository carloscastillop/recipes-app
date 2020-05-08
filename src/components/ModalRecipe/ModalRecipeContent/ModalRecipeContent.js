import React from "react";
import styles from "../ModalRecipe.module.scss";
import 'animate.css';
import Recipe from '../../Recipe/Recipe';

const ModalRecipeContent = (props) => {
    return (
        <React.Fragment>
            <div className={styles.modalBody}>
                <Recipe recipe={props.recipe}/>
            </div>
        </React.Fragment>
    );
}
export default ModalRecipeContent;