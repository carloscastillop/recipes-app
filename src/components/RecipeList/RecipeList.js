import React from "react";
import styles from './RecipesList.module.scss';
import 'animate.css';
import RecipeCard from "./RecipeCard/RecipeCard";

const recipeList = (props) => {
    let recipes = null;
    let showMore = null;

    if(!props.recipes.results){
        return null;
    }

    if (props.recipes.results.length > 0) {
        recipes = props.recipes.results.map((recipe, index) => {
            return (
                <div
                    className={`${styles.col12} ${styles.colSm6} ${styles.colSm6} ${styles.colLg3} ${styles.mb3} ${styles.test}`}
                    key={`recipe-container-${recipe.id}-${index}`}
                >
                    <RecipeCard
                        key={`recipe-${recipe.id}`}
                        recipe={recipe}
                        show={props.show}
                        getRecipe={props.getRecipe}
                        counter={index + 1}
                    />
                </div>
            );
        });

        let showMoreText = (
            <div>
                <div>
                    <i className="fas fa-utensils"></i>
                </div>
                <p>
                    Total of {props.recipes.paginator.totalResults} recipes.
                </p>
            </div>
        );

        let showMoreBtn = '';
        if (props.recipes.paginator.page < props.recipes.paginator.pages) {
            showMoreText = (
                <p className={`${styles.textMuted} ${styles.small}`}>
                    displaying {props.recipes.paginator.displaying} from {props.recipes.paginator.totalResults} recipes.
                </p>
            );
            if(props.recipes.isLoading) {
                showMoreBtn = (
                    <div>
                        <div className={`${styles.textCenter} ${styles.my5}`}>
                            <i className="fas fa-circle-notch fa-spin fa-2x"></i>
                        </div>
                    </div>
                );
            }else{
                showMoreBtn = (
                    <button
                        className={`${styles.btn} ${styles.btnPrimary} animated bounce`}
                        onClick={e => {
                            props.getMore(true);
                        }}
                    >
                        <i className="fas fa-chevron-down"></i> Load more
                    </button>
                );
            }

        }

        showMore = (
            <div className={`${styles.textCenter} ${styles.my3}`}>
                {showMoreText}
                {showMoreBtn}
            </div>
        );
    }
    if (props.recipes.paginator.totalResults === 0) {
        recipes = (
            <div className={styles.col}>
                <p className={`${styles.textCenter}`}>
                    Sorry no results
                </p>
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