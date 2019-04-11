import React from 'react';


const handleInput =(event)=>{

     console.log("handle input called");
}

const handleSubmit = (event) =>{
    console.log("handle submit called");
}

const AddMedicine = () => {

    return (
        <div >

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Medicine Code</label>
                <input type="text" name="code" onChange={handleInput}/></div>
            <div>
                <label htmlFor="">Medicine Name</label>
                <input type="text" name="productName" onChange={handleInput}/></div>
             <div>
                <label htmlFor="">Quantity</label>
                <input type="text" name="quantity" onChange={handleInput}/></div>
             <div>
              <input type="submit" value="Add"/>
            </div>
        </form>

        </div>
    );

}

export default AddMedicine;