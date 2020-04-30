import React from "react";
import styles from './ModalRecipe.module.scss';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalRecipeContent from './ModalRecipeContent/ModalRecipeContent';

const ModalRecipe = (props) => {
    if (!props.show) {
        return null;
    }

    let recipeContent = null;
    //If recipe is not ready or is still loading
    if (!props.recipe || props.isLoading) {
        recipeContent = (
            <div>
                <div className={`${styles.textCenter} ${styles.my5}`}>
                    <i className="fas fa-circle-notch fa-spin fa-2x"></i>
                </div>
            </div>
        );
    }
    //If recipe is ready and is not loading
    if (props.recipe && !props.isLoading) {
        recipeContent = <ModalRecipeContent
            recipe={props.recipe}
            favourite={props.favourite}
            favourites={props.favourites}
        />;
    }
    return (
        <React.Fragment>
            <div className={`${styles.modal} ${styles.show}`}>
                <div
                    className={`${styles.modalDialog} ${styles.modalLg} ${styles.modalDialogScrollable} ${styles.shadow}`}
                    role="document"
                >
                    <div className={styles.modalContent}>
                        <ModalHeader
                            title={'My title'}
                            close={props.close}
                        />
                        {recipeContent}
                        <ModalFooter/>
                    </div>
                </div>
            </div>
            <div className={`${styles.modalBackdrop} ${styles.white} ${styles.fade} ${styles.show} ${styles.stripe}`}></div>
        </React.Fragment>
    );
}

export default ModalRecipe;
