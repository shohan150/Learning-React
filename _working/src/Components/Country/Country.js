import React from 'react';
import './Country.css';

const Country = (props) => {
   const { name, area, region } = props.country;
   return (
      <div className='showCountries'>
         <h2>Country Name : {name.common}</h2>
         <p>Refion : {region}</p>
         <p>Area : {area}</p>
      </div>
   );
};

export default Country;