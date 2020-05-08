import React, { useState, useEffect } from "react";
import styles from "./Recipe.module.scss";
import LazyLoad from "react-lazyload";
import RecipeLabels from "../RecipeList/RecipeCard/RecipeLabels/RecipeLabels";
import ReactHtmlParser from "react-html-parser";


const Recipe = (props) => {

    return (
        <div className={styles.container}>
            <h1>Recipe detail {props.id}</h1>
            <div className={`${styles.bgLight} ${styles.textCenter} ${styles.mb4} animated fadeInDown`}>
                <LazyLoad
                    height={200}
                    offset={100}
                >
                    <img
                        src={`https://spoonacular.com/recipeImages/${props.recipe.id}-480x360.jpg`}
                        className={`${styles.imgFluid} ${styles.rounded}`}
                        alt={props.recipe.title}
                    />
                </LazyLoad>
            </div>
            <h2 className={`${styles.h4} animated fadeInUp`}>
                {props.recipe.title}
            </h2>
            <div className={`${styles.mb3} ${styles.mt1} animated fadeIn`}>
                <RecipeLabels
                    readyInMinutes={props.recipe.readyInMinutes}
                    servings={props.recipe.servings}
                />
            </div>
            {
                props.recipe.instructions &&
                <div className={`animated fadeIn`}>
                    {ReactHtmlParser(props.recipe.instructions)}
                </div>
            }
        </div>
    );
}
export default Recipe;