import React from "react";
import styles from './RecipesList.module.scss';
import RecipeCard from "./RecipeCard/RecipeCard";

const recipeList = (props) => {
    let recipes = null;
    if(props.recipes){
        recipes = props.recipes.map((recipe, index)=>{
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
    }

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                {recipes}
            </div>
            <div className={`${styles.textCenter} ${styles.my3}`}>
                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                >
                    Load more
                </button>
            </div>
        </div>
    );
}
export default recipeList;