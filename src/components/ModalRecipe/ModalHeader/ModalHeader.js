import React from "react";
import styles from "../ModalRecipe.module.scss";

const ModalHeader = (props) => {
    return (
        <div className={styles.modalHeader}>
            <h5 className={styles.modalTitle}>
                {props.title}
            </h5>
        </div>
    );
}
export default ModalHeader;