import React from "react";
import styles from "./RecipeCardHead.module.scss";
import 'animate.css';

const RecipeCardHead = () => {

    return (
        <div className={`${styles.card} ${styles.RecipeCard} ${styles.h100}`}>
            <div className={`${styles.recipeImage}`}>
                <span className={`animated fadeInUp`}>
                    Recipes comparator
                </span>
            </div>
            <div className={`${styles.cardTitleContainer} ${styles.cardBody} ${styles.pb0}`}>
                <h5 className={`${styles.cardTitle} ${styles.h6}`}>
                    Recipe's name
                </h5>
            </div>
            <ul className={`${styles.listGroup} ${styles.listGroupFlush}`}>
                <li className={`${styles.listGroupItem}`}>
                    <span className={`animated fadeInLeft`}>
                        <i className="far fa-clock fa-spin"></i> Ready in minutes
                    </span>
                </li>
                <li className={`${styles.listGroupItem}`}>
                    <span className={`animated fadeInLeft`}>
                        <i className="fas fa-user-friends"></i> Servings
                    </span>
                </li>
                <li className={`${styles.listGroupItem}`}>
                    <span className={`animated fadeInLeft`}>
                        <i className="fas fa-heartbeat"></i> Very healthy
                    </span>
                </li>
                <li className={`${styles.listGroupItem}`}>
                    <span className={`animated fadeInLeft`}>
                        <i className="fas fa-carrot"></i> Vegetarian
                    </span>
                </li>
                <li className={`${styles.listGroupItem}`}>
                    <span className={`animated fadeInLeft`}>
                        <i className="fas fa-seedling"></i> Vegan
                    </span>
                </li>
                <li className={`${styles.listGroupItem}`}>
                    <span className={`animated fadeInLeft`}>
                        <i className="fas fa-bread-slice"></i> Gluten free
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default RecipeCardHead;
