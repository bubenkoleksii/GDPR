import React from 'react';
import {Button} from "react-bootstrap";
import Sorting from "../elements/Sorting";
import Favorite from "../elements/Favorite";

const Header = ({sortByRate, sortByPrice, clearFilters}) => {
  return (
    <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
      <div style={{display: 'flex', alignItems: 'space-between', width: '70%', marginTop: '25px' }}>
        <div>
          0
        </div>
      
        <div style={{width: '100%', height: '50px', color: "red", fontSize: '20px'}}>
          My store
        </div>
        
        <Favorite/>
        
        <div>
          <Sorting sortByPrice={sortByPrice} sortByRate={sortByRate}/>
        </div>
  
        <Button variant="outline-warning" style={{marginBottom: '20px', height: '40px', marginLeft: '20px'}}
                onClick={() => clearFilters()}>Очистити</Button>
      </div>
    </div>
  );
};

export default Header;
