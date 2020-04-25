import React, {useState} from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import RecipeList from '../components/RecipeList/RecipeList';
import Modal from "../components/Modal/Modal";

const App = () => {

    // Ingredients filters
    const [ingredientsState, setIngredientsState] = useState({
        ingredients: [
            {'name': 'eggs', 'selected': false},
            {'name': 'meat', 'selected': true},
            {'name': 'chicken', 'selected': false},
            {'name': 'fish', 'selected': false},
            {'name': 'pasta', 'selected': true},
            {'name': 'potatoes', 'selected': false},
        ]
    });
    const ingredientsHandler = (newIngredient) => {
        const ingredients = [...ingredientsState.ingredients];
        ingredients.push(newIngredient)
        setIngredientsState({
            ingredients: ingredients,
        });
    }

    const getRecipesByIngredients = () => {
        let url = 'https://api.spoonacular.com/recipes/search';
        const selectedIngredients = ingredientsState.ingredients.filter(ingredient => ingredient.selected);
        let query = selectedIngredients.map(ingredient => {
            return ingredient.name;
        })
        const number = 12;
        const apiKey = '2e996ea46fbb4cbc86f9b823ff687725';
        url = `${url}?query=${query.join("+")}&number=${number}&apiKey=${apiKey}`

        axios.get(url)
            .then(res => {
                console.log({'data':res.data.results})
                setResultsState({
                    results: res.data.results
                });
            })
    }

    const getRecipesByIngredientsHandler = () => {
        getRecipesByIngredients();
    }

    // Recipe results
    const [resultsState, setResultsState] = useState({
        results: []
    });

    // Modal
    const [modalState, setModalState] = useState({
        show: false
    });

    const modalHandler = (option = true) => {
        setModalState({
            show: option,
        });
    }

    return (
        <div className={styles.App}>
            <Header/>
            <SearchForm
                ingredients={ingredientsState.ingredients}
                selectedFilters={ingredientsHandler}
                click={getRecipesByIngredientsHandler}
            />
            <RecipeList
                show={modalHandler}
                recipes={resultsState.results}
            />
            <Modal
                show={modalState.show}
                close={modalHandler}
                title={'A recipe'}
            >
                <img
                    src='https://via.placeholder.com/800x400?text=A BANNER'
                    className={styles.imgFluid}
                    alt='banner'
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor quam, rutrum eget ipsum et,
                    porttitor molestie elit. Aenean felis velit, blandit vitae bibendum at, mattis eu turpis. Nullam
                    vitae nisl eget lectus pellentesque varius ut ac eros. Donec a elit hendrerit, volutpat justo vitae,
                    pellentesque enim. Duis pulvinar sapien odio, quis venenatis sem rhoncus ac. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin nec nunc venenatis,
                    vestibulum eros in, viverra urna. In hac habitasse platea dictumst. Mauris in auctor massa, id
                    posuere arcu. Quisque rhoncus vehicula nisl, ut facilisis velit vestibulum sollicitudin. Mauris ac
                    augue commodo, auctor arcu non, sollicitudin risus. Mauris vitae elit ac lectus varius condimentum.
                    Nulla imperdiet fringilla consectetur. Donec vehicula odio ac porttitor sagittis.
                </p>
            </Modal>
        </div>
    );
}

export default App;
