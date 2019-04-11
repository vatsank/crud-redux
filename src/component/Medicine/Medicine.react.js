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

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}
export default connect(mapStateToProps, 
    mapDispatchToProps, mergeProps)(Medicine)
