import React, {useState, useEffect, useReducer} from "react";
import axios from "axios";

import './App.css';
import {STORE_URL} from './consts';
import CardRow from "./components/CardRow";
import Header from "./components/Header";
import reducer from './reducer';

function App() {
    const [products, setProducts] = useState([]);
    const [matrixProducts, setMatrixProducts] = useState([]);
    
    const [favoriteProducts, dispatch] = useReducer(reducer, null);
    
    const addFavoriteProductHandler = product => {
        dispatch({type: 'ADD', payload: product});
    }
    
    const removeFavoriteProductHandler = id => {
        dispatch({type: 'REMOVE', payload: id});
    }
    
    const setFakeData = () => {
        const url = STORE_URL + 'products';
        
        axios.get(url).then(response => {
            setProducts(response.data);
        });
    }

    const sortByPrice = isDesc => {
        setProducts(products.sort((a, b) => (isDesc) ? b.price - a.price : a.price - b.price));
        setMatrixProducts( makeMatrixForProduct(products, 5) );
    }
    
    const sortByRate = () => {
        setProducts(products.sort((a, b) => b.rating.rate - a.rating.rate));
        setMatrixProducts( makeMatrixForProduct(products, 5) );
    }
    
    const makeMatrixForProduct = (products, columns) => {
        const mainArray = [];

        for (let i = 0; i < products.length / columns; i++) {
            const rowArray = [];
            for (let j = i * columns; j < i * columns + columns; j++) {
                rowArray.push(products[j]);
            }
            mainArray.push(rowArray);
        }

        return mainArray;
    }
    
    const checkIsFavorite = id => {
        return favoriteProducts.map(f => f.id === id).includes(true);
    }
    
    useEffect(() => {
        setMatrixProducts( makeMatrixForProduct(products, 5) );
    }, [products]);
    
    
    useEffect(() => {
        setFakeData();
    }, []);
    
    useEffect(() => {
        const products = JSON.parse( localStorage.getItem('favorite') );
        
        dispatch({type: 'POPULATE', payload: products || []});
    }, []);
    
    useEffect(() => {
        if (favoriteProducts !== null)
            localStorage.setItem('favorite', JSON.stringify(favoriteProducts));
    }, [favoriteProducts]);
    
    return (
        <div className="App">
            <Header sortByPrice={sortByPrice}
                    sortByRate={sortByRate}
                    clearFilters={setFakeData}
            />
            
            { products && matrixProducts && matrixProducts.map((item) =>
                <CardRow products={item}
                         addFavorite={addFavoriteProductHandler}
                         removeFavorite={removeFavoriteProductHandler}
                         checkIsFavorite={checkIsFavorite}
                />
            )}
        </div>
    );
}

export default App;
