import React from 'react';
import styles from './App.module.scss';
import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import RecipeList from '../components/RecipeList/RecipeList';

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <SearchForm/>
            <RecipeList/>
        </div>
    );
}

export default App;
