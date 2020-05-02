import React from "react";
import {Link} from "react-router-dom";
import styles from "./ChosenListBtn.module.scss";

const ChosenListBtn = (props) => {
    const chosenCounter = (props.chosen) ? props.chosen.length : 0;
    if (chosenCounter === 0) {
        return null;
    }
    return (
        <div className={`${styles.ChosenListBtn} ${styles.shadowSm}`}>
            <Link to="/chosen/" className={`${styles.btn}`}>
                <i className="fas fa-clipboard-list fa-2x"></i>
                <span
                    className={`${styles.badge} ${styles.badgePill} ${styles.badgePrimary}`}>
                    {chosenCounter}
                </span>
            </Link>
        </div>
    );
}

export default ChosenListBtn;