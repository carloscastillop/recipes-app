import React from "react";
import styles from "./ModalFooter.module.scss";

const ModalFooter = (props) => {
    return (
        <div className={styles.modalFooter}>
            <button
                type="button"
                className={`${styles.btn} ${styles.btnPrimary}`}
            >
                <i className="far fa-heart"></i> Add to favourites
            </button>

            <button
                type="button"
                className={`${styles.btn} ${styles.btnPrimary}`}
            >
                <i className="fas fa-clipboard-list"></i> Add to list
            </button>
        </div>
    );
}
export default ModalFooter;