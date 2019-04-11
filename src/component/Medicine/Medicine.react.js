import React from 'react';
import { fetchAllMedicines } from '../../action/action';
import {connect} from 'react-redux';

const Medicine = (props) => {

     if(!props.list){

        return(
            <div>
            <h2>Click Button to Fetch</h2>

            <button onClick={props.getMedicines}>Fetch</button>

            </div>

        );
     } else {
    return (
   
            
        <div >
        <ul>
        {
            props.list.map((list,index)=>{
                return(
             <li key={list.code}>{list.productName}</li>
                )
            })
        }
        </ul>
        </div>
    )
    }
    

}

const mapStateToProps = (state) => {
    return {
        list: state.payload
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMedicines: () => {
            dispatch(fetchAllMedicines())
        }
    }
}
export default  connect(mapStateToProps, 
    mapDispatchToProps)(Medicine)

