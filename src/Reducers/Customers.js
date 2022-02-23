import { GET_CUSTOMERS, ERROR_CUSTOMERS } from '../Types';

const initialState = {
    customers: null,
    loading: true
}

export const customersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload.data,
                loading: false
            }
        case ERROR_CUSTOMERS:
            return {
                ...state,
                customers: 'Error na api customers',
                loading: false
            }
        default:
            return state;
    }
}