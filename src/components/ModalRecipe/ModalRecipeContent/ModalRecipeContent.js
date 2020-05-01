import React from "react";
import styles from "../ModalRecipe.module.scss";
import RecipeLabels from "../../RecipeList/RecipeCard/RecipeLabels/RecipeLabels";
import ReactHtmlParser from "react-html-parser";
import 'animate.css';
import LazyLoad from "react-lazyload";

const ModalRecipeContent = (props) => {

    return (
        <React.Fragment>
            <div className={styles.modalBody}>
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
        </React.Fragment>
    );
}
export default ModalRecipeContent;