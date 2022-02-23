import { GET_SUPPLIERS, ERROR_SUPPLIERS, GET_NEARBY_SUPPLIERS } from '../Types';

const initialState = {
    suppliers: null,
    nearbySuppliers: null,
    loading: true
}

// [
//     [{ lat: 34.8791806, lng: -111.8265049 }, "Boynton Pass"],
//     [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
//     [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
//     [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
//     [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
//   ];

export const SuppliersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEARBY_SUPPLIERS:
            const nearby = [];
            //@ts-ignore
            const filterNearby = action.payload.data.filter((supply, i) => { nearby.push([{ lat: supply.address.lat, lng: supply.address.long }, supply.address.neighborhood]) })
            
            return {
                ...state,
                nearbySuppliers: nearby,
                loading: false
            }
        case GET_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload.data,
                loading: false
            }
        case ERROR_SUPPLIERS:
            return {
                ...state,
                suppliers: 'Error na api suppliers',
                loading: false
            }
        default:
            return state;
    }
}