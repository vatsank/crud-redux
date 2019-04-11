import React from 'react';
import Medicine from '../Medicine/Medicine.react';

const eachMedicine ={
    code:101,
    productName:'crocin',
    quantity:10
}
const ShowMedicines = () => {

    return (
        <div >
           <h2>Show Medicine ...Loading</h2>
           <Medicine medicine={eachMedicine}/>
        </div>
    );

}

export default ShowMedicines;