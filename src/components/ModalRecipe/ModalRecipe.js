import React from "react";
import styles from './ModalRecipe.module.scss';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalRecipeContent from './ModalRecipeContent/ModalRecipeContent';
import Loading from "../Loading/Loading";

const ModalRecipe = (props) => {
    if (!props.show) {
        return null;
    }

    let recipeContent = null;
    //If recipe is not ready or is still loading
    if (!props.recipe || props.isLoading) {
        recipeContent = (
            <Loading />
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
                    className={`${styles.modalDialog} ${styles.modalXl} ${styles.modalDialogScrollable} ${styles.shadow}`}
                    role="document"
                >
                    <div className={styles.modalContent}>
                        {recipeContent}
                        <ModalFooter
                            close={props.close}
                            recipe={props.recipe}
                            favourites={props.favourites}
                            favourite={props.favourite}
                            chosen={props.chosen}
                            chosenList={props.chosenList}
                            chosenMode={props.chosenMode}
                            chosenFinalRecipe={props.chosenFinalRecipe}
                        />
                    </div>
                </div>
            </div>
            <div className={`${styles.modalBackdrop} ${styles.white} ${styles.fade} ${styles.show} ${styles.stripe}`}></div>
        </React.Fragment>
    );
}

export default ModalRecipe;
