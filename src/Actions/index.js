import {
    GET_GEO_LOCATION,
    ERROR_GEO_LOCATION,
    ERROR_HEROKU_GEO_LOCATION,
    GET_CUSTOMERS,
    ERROR_CUSTOMERS,
    GET_NEARBY_SUPPLIERS,
    GET_SUPPLIERS,
    ERROR_SUPPLIERS
} from '../Types'
import axios from 'axios'

export const getGeoLocation = () => async dispatch => {

    try {
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        const success = (pos) => {
            let crd = pos.coords;

            const geo = {
                location: { lat: crd.latitude, lng: crd.longitude },
                accuracy: crd.accuracy
            }

            dispatch({
                type: GET_GEO_LOCATION,
                payload: geo
            })
        };

        const error = (err) => {
            console.warn('ERROR(' + err.code + '): ' + err.message);

            const geoError = {
                location: { lat: -23.6121351, lng: -46.6772744 },
                accuracy: 16.889
            }

            dispatch({
                type: ERROR_HEROKU_GEO_LOCATION,
                payload: geoError
            })
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error, options)
        } else {
            const geoError = {
                location: { lat: -23.6121351, lng: -46.6772744 },
                accuracy: 16.889
            }

            dispatch({
                type: ERROR_GEO_LOCATION,
                payload: geoError
            })
        }
        
    }
    catch (e) {
        dispatch({
            type: ERROR_GEO_LOCATION,
            payload: console.log(e),
        })
    }

}

export const getCustomers = () => async dispatch => {

    try {
        const res = await axios.get(`https://61f16556072f86001749f1b7.mockapi.io/api/v1/customers`)
        dispatch({
            type: GET_CUSTOMERS,
            payload: res
        })
    }
    catch (e) {
        console.warn('ERROR(' + e.code + '): ' + e.message);

        dispatch({
            type: ERROR_CUSTOMERS,
            payload: console.log(e)
        })
    }
}

export const getSuppliers = () => async dispatch => {

    try {
        const res = await axios.get(`https://61f16556072f86001749f1b7.mockapi.io/api/v1/suppliers`)
        dispatch({
            type: GET_SUPPLIERS,
            payload: res
        })
    }
    catch (e) {
        console.warn('ERROR(' + e.code + '): ' + e.message);

        dispatch({
            type: ERROR_SUPPLIERS,
            payload: console.log(e)
        })
    }
}

export const getNearbySuppliers = () => async dispatch => {

    try {
        const res = await axios.get(`https://61f16556072f86001749f1b7.mockapi.io/api/v1/suppliers`)
        dispatch({
            type: GET_NEARBY_SUPPLIERS,
            payload: res
        })
    }
    catch (e) {
        console.warn('ERROR(' + e.code + '): ' + e.message);

        dispatch({
            type: ERROR_SUPPLIERS,
            payload: console.log(e)
        })
    }
}
