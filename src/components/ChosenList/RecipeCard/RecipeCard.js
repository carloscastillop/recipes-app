import React from "react";
import LazyLoad from 'react-lazyload';
import constants from "../../../constants";
import styles from "./RecipeCard.module.scss";
import 'animate.css';

const RecipeCard = (props) => {

    const getRecipeHandler = (recipe) => {
        props.getRecipe(recipe.id, true);
        props.show('', true);
    }
    const wrapper = React.createRef();

    return (
        <div ref={wrapper} className={`${styles.card} ${styles.RecipeCard} ${styles.h100}`}>
            <div className={`${styles.recipeImage}`}>
                <LazyLoad
                    key={props.recipe.id}
                    once={true}
                    height={200}
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
            </div>
            <div className={`${styles.cardTitleContainer} ${styles.cardBody} ${styles.pb0}`}>
                <h5 className={`${styles.cardTitle} ${styles.h6}`}>
                    {props.recipe.title}
                </h5>
            </div>
            <ul className={`${styles.listGroup} ${styles.listGroupFlush} ${styles.textCenter}`}>
                <li className={`${styles.listGroupItem}`}>
                    {props.recipe.readyInMinutes}
                </li>
                <li className={`${styles.listGroupItem}`}>
                    {props.recipe.servings}
                </li>
                <li className={`${styles.listGroupItem}`}>
                    <span>
                        { (props.recipe.veryHealthy)?
                            (<i className={`fas fa-check ${styles.checked}`}></i>)
                            :
                            (<i className="fas fa-minus"></i>)
                        }
                    </span>
                </li>
                <li className={`${styles.listGroupItem}`}>
                    <span>
                        { (props.recipe.vegetarian)?
                            (<i className={`fas fa-check ${styles.checked}`}></i>)
                            :
                            (<i className="fas fa-minus"></i>)
                        }
                    </span>
                </li>
                <li className={`${styles.listGroupItem}`}>
                    <span>
                        { (props.recipe.vegan)?
                            (<i className={`fas fa-check ${styles.checked}`}></i>)
                            :
                            (<i className="fas fa-minus"></i>)
                        }
                    </span>
                </li>
                <li className={`${styles.listGroupItem}`}>
                    <span>
                        { (props.recipe.glutenFree)?
                            (<i className={`fas fa-check ${styles.checked}`}></i>)
                            :
                            (<i className="fas fa-minus"></i>)
                        }
                    </span>
                </li>

            </ul>
            <div className={`${styles.cardFooter} ${styles.borderTop0} ${styles.bgWhite} ${styles.textCenter}`}>
                <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={e => {
                        getRecipeHandler(props.recipe)
                    }}
                >
                    View
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;
