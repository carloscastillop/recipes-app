import React from "react";
import styles from "../ModalRecipe.module.scss";
import RecipeLabels from "../../RecipeList/RecipeCard/RecipeLabels/RecipeLabels";
import ReactHtmlParser from "react-html-parser";

const ModalRecipeContent = (props) => {

    return (
        <React.Fragment>
            <div className={styles.modalBody}>
                <div className={`${styles.bgLight} ${styles.textCenter} ${styles.mb4}`}>
                    <img
                        src={`https://spoonacular.com/recipeImages/${props.recipe.id}-480x360.jpg`}
                        className={styles.imgFluid}
                        alt={props.recipe.title}
                    />
                </div>
                <h2>{props.recipe.title}</h2>
                <div className={styles.my3}>
                    <RecipeLabels
                        readyInMinutes={props.recipe.readyInMinutes}
                        servings={props.recipe.servings}
                    />
                </div>
                {ReactHtmlParser(props.recipe.instructions)}
            </div>
        </React.Fragment>
    );
}
export default ModalRecipeContent;