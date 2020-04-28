import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import RecipeList from '../components/RecipeList/RecipeList';
import Modal from "../components/Modal/Modal";
import consts from '../constants';

const App = () => {

    // Ingredients filters
    const [ingredientsState, setIngredientsState] = useState({
        //INGREDIENTS BY DEFAULT
        ingredients: [
            {'id': 1, 'name': 'eggs', 'selected': false, 'erasable': false},
            {'id': 2, 'name': 'meat', 'selected': false, 'erasable': false},
            {'id': 3, 'name': 'chicken', 'selected': false, 'erasable': false},
            {'id': 4, 'name': 'fish', 'selected': false, 'erasable': false},
            {'id': 5, 'name': 'pasta', 'selected': false, 'erasable': false},
            {'id': 6, 'name': 'potatoes', 'selected': false, 'erasable': false},
        ]
    });

    useEffect(() => {
        addIngredientsToStates();
    }, []);

    const getNewId = () => {
        let date = new Date();
        return date.getTime();
    }
    const ingredientsHandler = (newIngredient) => {
        const ingredients = [...ingredientsState.ingredients];
        const newIngredientObj = {
            'id': getNewId(),
            'name': newIngredient,
            'selected': true,
            'erasable': true
        };
        ingredients.push(newIngredientObj);
        setIngredientsState({
            ingredients: ingredients,
        });
        addIngredientLocalStorage(newIngredientObj);
    }

    const addIngredientsToStates = () => {
        const ingredientsStorage = getIngredientsLocalStorage();
        const ingredients = [...ingredientsState.ingredients];
        if (ingredientsStorage) {
            ingredientsStorage.forEach((elem) => {
                elem.selected = false;
                ingredients.push(elem);
            });
            setIngredientsState({
                ingredients: ingredients,
            });
        }
    }

    const deleteIngredientsStates = (ingredientId) => {
        const ingredients = [...ingredientsState.ingredients];
        const newIngredients = ingredients.filter(
            ingredient => ingredient.id !== ingredientId
        );
        setIngredientsState({
            ingredients: newIngredients,
        });
    }

    const getIngredientsLocalStorage = () => {
        const ingredients = JSON.parse(localStorage.getItem('myIngredients'));
        return ingredients;
    }

    const addIngredientLocalStorage = (ingredient) => {
        let ingredients = getIngredientsLocalStorage();
        const ingredientList = [];
        if (ingredients) {
            ingredients.forEach((elem) => {
                ingredientList.push(elem);
            });
        }
        ingredientList.push(ingredient);
        localStorage.setItem('myIngredients', JSON.stringify(ingredientList));
    }

    const removeIngredientLocalStorage = (ingredientId) => {
        let ingredients = getIngredientsLocalStorage();
        const test = ingredients.filter(
            ingredient => ingredient.id !== ingredientId
        );
        deleteIngredientsStates(ingredientId);
        if (test.length === 0) {
            setEditIngredientsState({
                edit: false
            })
        }
        localStorage.setItem('myIngredients', JSON.stringify(test));
    }

    const getRecipesByIngredients = (paginate = false) => {
        let url = consts.url;
        const selectedIngredients = ingredientsState.ingredients.filter(ingredient => ingredient.selected);
        let query = selectedIngredients.map(ingredient => {
            return ingredient.name;
        })
        const number = resultsState.paginator.number;
        const offset = resultsState.paginator.offset;
        const apiKey = '2e996ea46fbb4cbc86f9b823ff687725';
        url = `${url}?query=${query.join("+")}&number=${number}&apiKey=${apiKey}&offset=${offset}`

        axios.get(url)
            .then(res => {
                const data = res.data;
                const newPage = data.results;
                const currentPage = [...resultsState.results];
                const offset = data.offset + 1;
                let page = null;
                const pages = Math.ceil(data.totalResults / data.number);
                if(paginate){
                    page = [...currentPage, ...newPage]
                }else{
                    page = [...newPage];
                }
                setResultsState({
                    results: page,
                    paginator: {
                        offset: offset,
                        number: data.number,
                        totalResults: data.totalResults,
                        page: data.offset + 1,
                        pages: pages,
                        displaying: offset * data.number
                    }
                });
            })
    }

    //form
    const toogleIngredientFilterHandler = (id) => {
        const ingredientIndex = ingredientsState.ingredients.findIndex(ingredient => {
            return ingredient.id === id
        });
        const ingredient = {
            ...ingredientsState.ingredients[ingredientIndex]
        };
        const ingredients = [...ingredientsState.ingredients];

        ingredient.selected = !ingredient.selected;
        ingredients[ingredientIndex] = ingredient;

        setIngredientsState({
            ingredients: ingredients,
        });
    }

    const [ingredientFormState, setIngredientFormStateState] = useState({
        formIngredient: ''
    });

    const ingredientFormChangeHandler = (event) => {
        setIngredientFormStateState({
            formIngredient: event.target.value
        });
    }

    const ingredientFormAddHandler = () => {
        ingredientsHandler(ingredientFormState.formIngredient);
        ingredientFormClear();
    }

    const ingredientFormClear = () => {
        setIngredientFormStateState({
            formIngredient: ''
        });
    }

    const getRecipesByIngredientsHandler = () => {
        getRecipesByIngredients();
    }

    // Recipe results
    const [resultsState, setResultsState] = useState({
        results: [],
        paginator: {
            offset: 0,
            number: consts.pagination.number,
            totalResults: null,
            page: null,
            pages: null,
            displaying: null
        }
    });

    //Edit Ingredients
    const [editIngredientsState, setEditIngredientsState] = useState({
        edit: false
    });

    const setEditIngredientsStateHandler = () => {
        setEditIngredientsState({
            edit: !editIngredientsState.edit
        })
    }

    const deleteIngredientsStateHandler = (id) => {
        removeIngredientLocalStorage(id);
    }

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
                ingredientForm={ingredientFormState.formIngredient}
                selectedFilters={ingredientsHandler}
                click={getRecipesByIngredientsHandler}
                toogle={toogleIngredientFilterHandler}
                changed={ingredientFormChangeHandler.bind(this)}
                add={ingredientFormAddHandler}
                clear={ingredientFormClear}
                remove={removeIngredientLocalStorage}
                editStatus={editIngredientsState.edit}
                edit={setEditIngredientsStateHandler}
                deleteIngredient={deleteIngredientsStateHandler}
            />
            <RecipeList
                show={modalHandler}
                recipes={resultsState.results}
                paginator={resultsState.paginator}
                getMore={getRecipesByIngredients}
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
