import React from "react";
import styles from './RecipesList.module.scss';
import RecipeCard from "./RecipeCard/RecipeCard";

const recipeList = (props) => {
    let recipes = null;
    let showMore = false;
    if (props.recipes.length > 0) {
        recipes = props.recipes.map((recipe, index) => {
            return (
                <div className={styles.col6} key={`recipe-container-${index}`}>
                    <RecipeCard
                        key={`recipe-${index}`}
                        recipe={recipe}
                        show={props.show}
                    />
                </div>
            );
        });

        showMore = (
            <div className={`${styles.textCenter} ${styles.my3}`}>
                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                >
                    <i className="fas fa-chevron-down"></i> Load more
                </button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                {recipes}
            </div>
            {showMore}
        </div>
    );
}
export default recipeList;