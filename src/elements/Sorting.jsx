import React from 'react';
import {Dropdown} from "react-bootstrap";

const Sorting = ({sortByPrice, sortByRate}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        Сортування
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => sortByPrice(false)}>За зростанням ціни</Dropdown.Item>
        <Dropdown.Item onClick={() => sortByPrice(true)}>За спаданням ціни</Dropdown.Item>
        <Dropdown.Item onClick={sortByRate}>За рейтингом</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Sorting;