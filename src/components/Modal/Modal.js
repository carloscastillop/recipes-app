import React from "react";
import styles from './Modal.module.scss';

const Modal = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <React.Fragment>
            <div className={`${styles.modal} ${styles.show}`}>
                <div
                    className={`${styles.modalDialog} ${styles.modalLg} ${styles.modalDialogScrollable} ${styles.shadow}`}
                    role="document"
                >
                    <div className={styles.modalContent}>
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

                        <div className={styles.modalBody}>
                            {props.children}
                        </div>

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

                    </div>
                </div>
            </div>
            <div
                className={`${styles.modalBackdrop} ${styles.white} ${styles.fade} ${styles.show}`}
            ></div>
        </React.Fragment>
    );
}

export default Modal;
