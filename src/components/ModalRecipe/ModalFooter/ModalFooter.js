import React from "react";
import styles from "./ModalFooter.module.scss";

const ModalFooter = (props) => {
    return (
        <div className={styles.modalFooter}>
            <button
                type="button"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm}`}
            >
                <i className="fas fa-clipboard-list"></i> Add to list
            </button>
        </div>
    );
}
export default ModalFooter;