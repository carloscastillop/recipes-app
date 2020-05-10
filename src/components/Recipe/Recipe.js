import React from "react";
import styles from "./Recipe.module.scss";
import LazyLoad from "react-lazyload";
import RecipeLabels from "../RecipeList/RecipeCard/RecipeLabels/RecipeLabels";
import constants from "../../constants";

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";


const Recipe = (props) => {
    const shareUrl = constants.url;
    const SharedDisabled = true;
    let extendedIngredients = null;
    let analyzedInstructions = null;
    if (props.recipe.extendedIngredients) {
        extendedIngredients = props.recipe.extendedIngredients.map((ingredient, index) => {
            return (
                <li key={`ingredient-${index}`}>
                    {ingredient.original}
                </li>
            )
        });
    }
    if (props.recipe.analyzedInstructions) {
        props.recipe.analyzedInstructions.map((instructions) => {
            return analyzedInstructions = instructions.steps.map((instruction, index) => {
                return (
                    <div key={`step-${index}`}>
                        <p className={styles.mb1}>
                            <span className={`${styles.stepTitle} ${styles.mr1}`}>
                                Step {instruction.number}
                            </span>
                            {instruction.length &&
                            <span
                                className={`${styles.badge} ${styles.badgeSecondary} ${styles.mr1}`}
                            >
                                    <i className="far fa-clock"></i> {instruction.number}
                                </span>
                            }
                        </p>

                        <p>{instruction.step}</p>
                    </div>
                );
            })
        });
    }


    return (
        <div className={`${styles.Recipe}`}>
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
            <h1 className={`${styles.h4} animated fadeInUp`}>
                {props.recipe.title}
            </h1>
            <div className={`${styles.dBlock} ${styles.my3}`}>
                <div className={`${styles.mr2} ${styles.dInlineBlock}`}>
                    <FacebookShareButton
                        quote={`hahahah`}
                        hashtag={`hohoho`}
                        url={shareUrl}
                        disabled={SharedDisabled}
                    >
                        <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>
                </div>
                <div className={`${styles.mr2} ${styles.dInlineBlock}`}>
                    <WhatsappShareButton
                        title={`test`}
                        url={shareUrl}
                        disabled={SharedDisabled}
                    >
                        <WhatsappIcon size={32} round={true}/>
                    </WhatsappShareButton>
                </div>
                <div className={`${styles.mr2} ${styles.dInlineBlock}`}>
                    <TwitterShareButton
                        url={shareUrl}
                        disabled={SharedDisabled}
                    >
                        <TwitterIcon size={32} round={true}/>
                    </TwitterShareButton>
                </div>
            </div>
            <div className={`${styles.mb3} ${styles.mt1} animated fadeIn`}>
                <RecipeLabels
                    readyInMinutes={props.recipe.readyInMinutes}
                    servings={props.recipe.servings}
                />
            </div>
            {
                extendedIngredients &&
                <div className={`animated fadeIn ${styles.mb4}`}>
                    <div className={`${styles.card} ${styles.textSecondary} ${styles.small}`}>
                        <div className={`${styles.cardBody}`}>
                            <h6>Ingredients:</h6>
                            <ul>
                                {extendedIngredients}
                            </ul>
                        </div>
                    </div>
                </div>
            }
            {
                analyzedInstructions &&
                <div className={`animated fadeIn`}>
                    <h6>Instructions:</h6>
                    {analyzedInstructions}
                </div>
            }
            <div className={`${styles.textCenter}`}>
                <hr/>
                <i className="fas fa-utensils fa-3x"></i>
            </div>


        </div>
    );
}
export default Recipe;