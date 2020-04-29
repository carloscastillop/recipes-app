import React from "react";
import styles from "./RecipeLabels.module.scss";

const RecipeLabels = (props) => {
    let cuisineList = "";
    if (props.cuisines) {
        props.cuisines.forEach(cuisine => {
            cuisineList = cuisineList + "," + cuisine;
        });
    }
    return (
        <div className={styles.RecipeLabels}>
            <span
                className={`${styles.badge} ${styles.badgeLight} ${styles.mr1}`}
            >
                <i className="far fa-clock"></i> {props.readyInMinutes}
            </span>
            <span
                className={`${styles.badge} ${styles.badgeLight} ${styles.mr1}`}
            >
                <i className="fas fa-user-friends"></i> {props.servings}
            </span>
            {
                (props.cuisines && props.cuisines.length > 0) &&
                <span
                    className={`${styles.badge} ${styles.badgeLight} ${styles.mr1}`}
                >
                    <i className="fas fa-flag"></i> {cuisineList}
                </span>
            }
        </div>
    );
};

export default RecipeLabels;