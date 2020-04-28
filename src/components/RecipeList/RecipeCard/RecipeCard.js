import React from "react";
import RecipeLabels from './RecipeLabels/RecipeLabels'
import styles from "./RecipeCard.module.scss";
import 'animate.css';

const RecipeCard = (props) => {
    const recipeName = props.recipe.title;
    const recipeImage = `https://spoonacular.com/recipeImages/${props.recipe.id}-480x360.jpg`;
    const recipeContent = (
        <div>
            <img
                src={recipeImage}
                className={styles.imgFluid}
                alt={props.recipe.title}
            />
            <h2
                className={`${styles.my3}`}
            >
                {recipeName}
            </h2>
        </div>
    );
    const getRecipeHandler = (recipe) => {
        props.getRecipe(recipe.id);
        props.show(recipeContent, true);
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
