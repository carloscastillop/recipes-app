import React from "react";
import styles from './RecipesList.module.scss';
import RecipeCard from "./RecipeCard/RecipeCard";

const recipeList = (props) => {
    let recipes = null;
    let showMore = null;

    if (props.recipes.length > 0) {
        recipes = props.recipes.map((recipe, index) => {
            return (
                <div
                    className={`${styles.col6} ${styles.mb3}`}
                    key={`recipe-container-${index}`}
                >
                    <RecipeCard
                        key={`recipe-${recipe.id}`}
                        recipe={recipe}
                        show={props.show}
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
                    Total of {props.paginator.totalResults} recipes found.
                </p>
            </div>
        );
        let showMoreBtn = '';
        if(props.paginator.page < props.paginator.pages){
            showMoreText = (
                <p className={`${styles.textMuted} ${styles.small}`}>
                    displaying {props.paginator.displaying} from {props.paginator.totalResults} recipes.
                </p>
            );
            showMoreBtn = (
                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={e => {
                        props.getMore(true);
                    }}
                >
                    <i className="fas fa-chevron-down"></i> Load more
                </button>
            );
        }

        showMore = (
            <div className={`${styles.textCenter} ${styles.my3}`}>
                {showMoreText}
                {showMoreBtn}
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