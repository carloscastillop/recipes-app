import React from "react";
import styles from './RecipesList.module.scss';
import RecipeCard from "./RecipeCard/RecipeCard";

const recipeList = (props) => {
    const recipes = [];
    for (let i = 0; i < 10; i++) {
        recipes.push(
            <div className={styles.col6}>
                <RecipeCard/>
            </div>)
    }
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                {recipes}
            </div>
            <div className={`${styles.textCenter} ${styles.my3}`}>
                <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
                    Load more
                </a>
            </div>
        </div>
    );
}
export default recipeList;