import React from 'react';



const Medicine = (props) => {

    return (
        <div >
        
        <div>{props.medicine.code}</div>
        <div>{props.medicine.productName}</div>
        <div>{props.medicine.qunatity}</div>
        

        </div>
    );

}

export default Medicine;