import {useState, useEffect} from "react";
import axios from "axios";

import './App.css';
import {STORE_URL} from './consts';


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
  
  return (
    <div className="App">
      Init
    </div>
  );
}

export default App;
