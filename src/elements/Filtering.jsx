import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Dropdown} from "react-bootstrap";

const Filtering = ({ filterByCategory }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        const url = `https://fakestoreapi.com/products/categories`;

        axios.get(url).then(response => {
            setCategories(response.data);
        });
    }, []);

    useEffect(() => {
        filterByCategory(selectedCategories);
    }, [selectedCategories]);

    const handlerSelectedClick = (e, categoryName) => {
        if (e.target.checked) {
            setSelectedCategories([...selectedCategories, categoryName]);
        } else {
            setSelectedCategories(selectedCategories.filter((item) => item !== categoryName));
        }
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                Фільтрація
            </Dropdown.Toggle>
            <Dropdown.Menu>
                    {categories.map((item) => (
                        <div key={item} className="mb-1">
                            <input
                                type={'checkbox'}
                                onClick={(e) => handlerSelectedClick(e, item)}
                            />
                            <label>{item}</label>
                        </div>
                    ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Filtering;