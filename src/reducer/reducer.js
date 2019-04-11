const nameInitialState = {}
export const medicineReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case "FETCH_MEDICINE":
            return Object.assign({},action);
        case "ADD_MEDICINE":
            return state
        default:
            return state
    }
}

