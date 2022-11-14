import React, {useState, useEffect} from "react";
import axios from "axios";

import './App.css';
import {STORE_URL} from './consts';
import CardRow from "./components/CardRow";
import Header from "./components/Header";


function App() {
    const [products, setProducts] = useState([]);
    const [matrixProducts, setMatrixProducts] = useState([]);
    
    const setFakeData = () => {
        const url = STORE_URL + 'products';
        
        axios.get(url).then(response => {
            setProducts(response.data);
        });
    }

    const sortByPrice = () => {
        setProducts(products.sort((a, b) => a.price - b.price));
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
    
    useEffect(() => {
        setMatrixProducts( makeMatrixForProduct(products, 5) );
    }, [products]);
    
    
    useEffect(() => {
        setFakeData();
    }, []);


    return (
        <div className="App">
            <Header sortByPrice={sortByPrice} sortByRate={sortByRate} clearFilters={setFakeData}/>
            { products && matrixProducts && matrixProducts.map((item) =>
                <CardRow products={item}/>
            )}
        </div>
    );
}

export default App;
