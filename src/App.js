import React, {useState, useEffect} from "react";
import axios from "axios";

import './App.css';
import {STORE_URL} from './consts';
import CardRow from "./components/CardRow";
import {Dropdown} from "react-bootstrap";


function App() {
    const [products, setProducts] = useState([]);
    const [matrixProducts, setMatrixProducts] = useState([]);
    
    const setFakeData = url => {
        axios.get(url).then(response => {
            setProducts(response.data);
        });
    }

    const sortByPrice = () => {
        setProducts(products.sort((a, b) => a.price - b.price));
        setMatrixProducts( makeMatrixForProduct(products, 5) );
    }
    
    const sortByRate = () => {
        setProducts(products.sort((a, b) => a.rating.rate - b.rating.rate));
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
        const url = STORE_URL + 'products';

        setFakeData(url);
    }, []);


    return (
        <div className="App">
            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{display: 'flex', alignItems: 'space-between', width: '70%', marginTop: '25px' }}>
                    <div>
                        0
                    </div>
            
                    <div style={{width: '100%', height: '50px', color: "red", fontSize: '20px'}}>
                        My store
            
                    </div>
            
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                Сортування
                            </Dropdown.Toggle>
                    
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={sortByPrice}>За ціною</Dropdown.Item>
                                <Dropdown.Item onClick={sortByRate}>За рейтингом</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            
            { products && matrixProducts && matrixProducts.map((item) =>
                <CardRow products={item}/>
            )}

        </div>
    );
}

export default App;
