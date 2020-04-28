import React from "react";
import styles from "./RecipeCard.module.scss";

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
            <h2>{recipeName}</h2>
        </div>
    );
    return (
        <div className={`${styles.card} ${styles.RecipeCard} ${styles.h100}`}>
            <img
                src={`https://spoonacular.com/recipeImages/${props.recipe.id}-556x370.jpg`}
                className={styles.cardImgTop}
                alt={props.recipe.title}
                onClick={e => {
                    props.show(recipeContent, true);
                }}
            />
            <div className={`${styles.cardBody} ${styles.pb0}`}>
                <div className={`${styles.mb2}`}>
                    <span
                        className={`${styles.badge} ${styles.badgeLight} ${styles.mr1}`}
                    >
                        <i className="far fa-clock"></i> {props.recipe.readyInMinutes}
                    </span>
                    <span
                        className={`${styles.badge} ${styles.badgeLight} ${styles.mr1}`}
                    >
                        <i className="fas fa-utensils"></i> {props.recipe.servings}
                    </span>
                </div>
                <h5 className={`${styles.cardTitle} ${styles.h6}`}>
                    {props.recipe.title}
                </h5>
            </div>
            <div className={`${styles.cardFooter} ${styles.borderTop0} ${styles.bgWhite}`}>
                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={e => {
                        props.show(recipeContent, true);
                    }}
                >
                    View
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;
