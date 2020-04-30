import React from "react";
import RecipeLabels from './RecipeLabels/RecipeLabels'
import styles from "./RecipeCard.module.scss";
import 'animate.css';

const RecipeCard = (props) => {

    const getRecipeHandler = (recipe) => {
        props.getRecipe(recipe.id);
        props.show('', true);
    }

    return (
        <div className={`${styles.card} ${styles.RecipeCard} ${styles.h100} animated fadeIn`}>
            <img
                src={`https://spoonacular.com/recipeImages/${props.recipe.id}-556x370.jpg`}
                className={styles.cardImgTop}
                alt={props.recipe.title}
                onClick={e => {
                    getRecipeHandler(props.recipe)
                }}
            />
            <div className={`${styles.cardBody} ${styles.pb0}`}>
                <div className={`${styles.mb2}`}>
                    <RecipeLabels
                        readyInMinutes={props.recipe.readyInMinutes}
                        servings={props.recipe.servings}
                    />
                </div>
                <h5 className={`${styles.cardTitle} ${styles.h6}`}>
                    {props.recipe.title}
                </h5>
            </div>
            <div className={`${styles.cardFooter} ${styles.borderTop0} ${styles.bgWhite}`}>
                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={e => {
                        getRecipeHandler(props.recipe)
                    }}
                >
                    View
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;
