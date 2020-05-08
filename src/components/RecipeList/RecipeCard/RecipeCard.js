import React from "react";
import LazyLoad from 'react-lazyload';
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
                <LazyLoad
                    height={200}
                    offset={100}
                >
                    <img
                        src={`${constants.api.urlImages}/recipeImages/${props.recipe.id}-556x370.jpg`}
                        className={styles.cardImgTop}
                        alt={props.recipe.title}
                        title={props.recipe.title}
                        onClick={e => {
                            getRecipeHandler(props.recipe)
                        }}
                    />
                </LazyLoad>
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
            {/*<div className={`${styles.cardFooter} ${styles.borderTop0} ${styles.bgWhite}`}>*/}
            {/*    <button*/}
            {/*        className={`${styles.btn} ${styles.btnPrimary}`}*/}
            {/*        onClick={e => {*/}
            {/*            getRecipeHandler(props.recipe)*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        View*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
}

export default RecipeCard;
