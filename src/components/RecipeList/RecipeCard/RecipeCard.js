import React from "react";
import styles from "./RecipeCard.module.scss";

const RecipeCard = (props) => {
    return (
        <div className={`${styles.card} ${styles.RecipeCard} ${styles.mb5}`}>
            <img
                src={`https://spoonacular.com/recipeImages/${props.recipe.id}-312x231.jpg`}
                className={styles.imgFluid}
                alt={props.recipe.title}
            />
            <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>
                    {props.recipe.title}
                </h5>
                <p>{props.recipe.id}</p>
                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={e => {
                        props.show();
                    }}
                >
                    View
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;
