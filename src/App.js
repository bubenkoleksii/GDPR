import {useState, useEffect} from "react";
import axios from "axios";

import './App.css';
import {STORE_URL} from './consts';
import CardItem from "./components/CardItem";


function App() {
    const [products, setProducts] = useState([]);

    const setFakeData = url => {
        axios.get(url).then(response => {
            setProducts(response.data);
        });
    }

    useEffect(() => {
        const url = STORE_URL + 'products';

        setFakeData(url);
    }, []);
    console.log(products);

    return (
        <div className="App">
            {products[0] && <CardItem category={products[0].category}
                                      description={products[0].description}
                                      id={products[0].id}
                                      image={products[0].image}
                                      price={products[0].price}
                                      rating={products[0].rating}
                                      title={products[0].title}/>
            }
        </div>
    );
}

export default App;
