import { GET_GEO_LOCATION, ERROR_GEO_LOCATION, ERROR_HEROKU_GEO_LOCATION } from '../Types'

const initialState = {
    geoLocation: null,
    loading: true
}

export const geoLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_HEROKU_GEO_LOCATION:
            return {
                ...state,
                geoLocation: action.payload,
                loading: false
            }
        case GET_GEO_LOCATION:
            return {
                ...state,
                geoLocation: action.payload,
                loading: false
            }
        case ERROR_GEO_LOCATION:
            return {
                ...state,
                geoLocation: 'Error na API Google Geo Location',
                loading: false
            }
        default:
            return state;
    }
}