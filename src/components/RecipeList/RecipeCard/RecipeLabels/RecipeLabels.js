import React from "react";
import styles from "./RecipeLabels.module.scss";

const RecipeLabels = (props) => {
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
        </div>
    );
}

export default RecipeLabels;