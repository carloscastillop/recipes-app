import React from "react";
import styles from './ChosenList.module.scss'
import RecipeCard from "./RecipeCard/RecipeCard";
import RecipeCardHead from "./RecipeCardHead/RecipeCardHead"


const ChosenList = (props) => {
    return (
        <div className={styles.ChosenList}>
            <div className={styles.container}>
                <h3 className={`${styles.mb4} animated fadeInUp`}>
                    <i className="fas fa-clipboard-list"></i> My chosen recipes for today
                </h3>
            </div>

            <div className={styles.scrollingWrapper}>
                <RecipeCardHead />
                {
                    props.recipes.map((recipe, index) => {
                        return (
                            <RecipeCard
                                key={`recipe-${recipe.id}`}
                                recipe={recipe}
                                show={props.show}
                                getRecipe={props.getRecipe}
                                counter={index + 1}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ChosenList;