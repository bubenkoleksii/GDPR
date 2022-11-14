import {useState, useEffect} from "react";
import axios from "axios";

import './App.css';
import {STORE_URL} from './consts';
import CardRow from "./components/CardRow";


function App() {
    const [products, setProducts] = useState([]);

    const setFakeData = url => {
        axios.get(url).then(response => {
            setProducts(response.data);
        });
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
        const url = STORE_URL + 'products';

        setFakeData(url);
    }, []);

    console.log(makeMatrixForProduct(products));

    return (
        <div className="App">
            { products && makeMatrixForProduct(products, 5).map((item) =>
                <CardRow products={item}/>
            )}

        </div>
    );
}

export default App;
