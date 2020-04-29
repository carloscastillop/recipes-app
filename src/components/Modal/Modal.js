import React from "react";
import styles from './Modal.module.scss';
import ReactHtmlParser from 'react-html-parser';
import RecipeLabels from "../RecipeList/RecipeCard/RecipeLabels/RecipeLabels";

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
                            {
                                props.isLoading &&
                                    <div className={`${styles.textCenter} ${styles.my3}`}>
                                        <i className="fas fa-circle-notch fa-spin fa-2x"></i>
                                    </div>
                            }
                            {
                                (props.recipe && !props.isLoading)  &&
                                <div>
                                    <div className={styles.my3}>
                                        <RecipeLabels
                                            readyInMinutes={props.recipe.readyInMinutes}
                                            servings={props.recipe.servings}
                                            cuisines={props.recipe.cuisines}
                                        />
                                    </div>
                                    {ReactHtmlParser(props.recipe.instructions)}
                                </div>
                            }
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
};

export default Modal;
