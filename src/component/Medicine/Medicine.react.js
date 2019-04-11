import React from 'react';
import { fetchAllMedicines } from '../../action/action';
import {connect} from 'react-redux';

const Medicine = (props) => {

    return (
        <div >
        
        <div>{props.medicine.code}</div>
        <div>{props.medicine.productName}</div>
        <div>{props.medicine.qunatity}</div>
        

        <button onClick={props.getMedicines}>Fetch</button>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        prop: state.payload
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

