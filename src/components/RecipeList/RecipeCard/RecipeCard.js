import React from "react";
import constants from "../../../constants";
import RecipeLabels from './RecipeLabels/RecipeLabels'
import styles from "./RecipeCard.module.scss";
import 'animate.css';

const RecipeCard = (props) => {

    const getRecipeHandler = (recipe) => {
        props.getRecipe(recipe.id);
        props.show('', true);
    }

    return (
        <div className={`${styles.card} ${styles.RecipeCard} ${styles.h100}`}>
            <div className={`${styles.recipeImage}`}>
                <img
                    src={`${constants.api.urlImages}/recipeImages/${props.recipe.id}-556x370.jpg`}
                    className={styles.cardImgTop}
                    alt={props.recipe.title}
                    title={props.recipe.title}
                    onClick={e => {
                        getRecipeHandler(props.recipe)
                    }}
                />
                <div className={`${styles.bgRecipeLabels}`}>
                    <RecipeLabels
                        readyInMinutes={props.recipe.readyInMinutes}
                        servings={props.recipe.servings}
                    />
                </div>
            </div>
            <div className={`${styles.cardBody} ${styles.pb0}`}>
                <h5 className={`${styles.cardTitle} ${styles.h6}`}>
                    {props.recipe.title}
                </h5>
            </div>
        </div>
    );
}

export default RecipeCard;
