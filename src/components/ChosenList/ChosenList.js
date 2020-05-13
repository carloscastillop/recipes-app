import React from "react";
import styles from './ChosenList.module.scss'
import RecipeCard from "./RecipeCard/RecipeCard";
import RecipeCardHead from "./RecipeCardHead/RecipeCardHead"
import {Link} from "react-router-dom";

const ChosenList = (props) => {
    return (
        <div className={styles.ChosenList}>
            <div className={styles.container}>
                <h3 className={`${styles.my4} animated fadeInUp`}>
                    <i className="fas fa-clipboard-list"></i> My chosen recipes for today
                </h3>
            </div>
            {
                (props.recipes.length === 0) &&
                    <div className={`${styles.container} ${styles.textCenter}`}>
                        <div className={`${styles.alert} ${styles.alertSecondary}`}>
                            To use this recipe comparator, you need at least one recipe on your pick list.
                            <div className={` ${styles.my3}`}>
                                <h6 className={styles.h1}>
                                    <i className="fas fa-clipboard-list animated tada delay-3s infinite"></i>
                                </h6>
                                <span className={styles.small}>
                                    Please add some recipes by pressing the <strong>chosen list</strong> icon on a recipe page.
                                </span>
                            </div>
                        </div>
                        <Link
                            to='/'
                            className={`${styles.btn} ${styles.btnPrimary}`}
                        >
                            Go to recipes
                        </Link>
                    </div>
            }
            {
                (props.recipes.length > 0) &&
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
                                    chosen={props.chosen}
                                />
                            );
                        })
                    }
                </div>

            }

        </div>
    );
}

export default ChosenList;