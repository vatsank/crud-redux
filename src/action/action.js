import axios from 'axios';

export const addMedicine  = () => ({
    type: 'ADD_MEDICINE'

})

export const handleInputChange  = (name,value) => ({
    type: 'HANDLE_INPUT_CHANGE',
    payload: { [name]: value}

})

export const fetchMedicine = (payload) => ({
    type: 'FETCH_MEDICINE',
    payload
});

const url = "http://localhost:4040/medicines"

export const fetchAllMedicines =()=>{

    return (dispatch) =>{

        return axios.get(url).
        then(resp=>{
            console.log(resp);
            dispatch(fetchMedicine(resp.data))
        });

    }
}

