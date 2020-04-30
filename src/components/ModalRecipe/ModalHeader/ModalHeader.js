import React from "react";
import styles from "../ModalRecipe.module.scss";

const ModalHeader = (props) => {
    return (
        <div className={styles.modalHeader}>
            <h5 className={styles.modalTitle}>
                {props.title}
            </h5>
            <button
                type="button"
                className={styles.close}
                onClick={props.close.bind(this, '', false)}
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}
export default ModalHeader;