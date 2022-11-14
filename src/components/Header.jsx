import React from 'react';
import {Button, Dropdown} from "react-bootstrap";

const Header = ({sortByRate, sortByPrice, clearFilters}) => {
  return (
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
  
        <Button variant="outline-warning" style={{marginBottom: '20px', marginLeft: '20px'}}
                onClick={() => clearFilters()}>Очистити</Button>
      </div>
    </div>
  );
};

export default Header;
