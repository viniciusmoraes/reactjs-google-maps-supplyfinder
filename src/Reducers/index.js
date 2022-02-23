import { combineReducers } from 'redux'
import { geoLocationReducer } from './GeoLocation.js'
import { customersReducer } from './Customers.js'
import { SuppliersReducer } from './Suppliers.js'

export const Reducers = combineReducers({
    geoLocationState: geoLocationReducer,
    customersState: customersReducer,
    suppliersState: SuppliersReducer
})
