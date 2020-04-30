import React from "react";
import styles from "../ModalRecipe.module.scss";
import RecipeLabels from "../../RecipeList/RecipeCard/RecipeLabels/RecipeLabels";
import ReactHtmlParser from "react-html-parser";

const ModalRecipeContent = (props) => {
    let favourite = (
        <i className={`far fa-heart fa-2x ${styles.heartOff}`}></i>
    );
    if(props.favourites.find(r => r.id === props.recipe.id)){
        favourite = (
            <i className={`fas fa-heart fa-2x ${styles.heartOn}`}></i>
        );
    }
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
                <h2 className={styles.h4}>{props.recipe.title}</h2>
                <button
                    type="button"
                    className={`${styles.btn} ${styles.btnLink} ${styles.btnSm}`}
                    onClick={e => {
                        props.favourite(props.recipe)
                    }}
                >
                    {favourite}
                </button>
                <div className={`${styles.mb3} ${styles.mt1}`}>
                    <RecipeLabels
                        readyInMinutes={props.recipe.readyInMinutes}
                        servings={props.recipe.servings}
                    />
                </div>
                {
                    props.recipe.instructions &&
                    ReactHtmlParser(props.recipe.instructions)
                }
            </div>
        </React.Fragment>
    );
}
export default ModalRecipeContent;