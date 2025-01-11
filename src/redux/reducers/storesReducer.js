import {GET_ALL_STORES, GET_ALL_STORES_TYPE, GET_ERROR, GET_STORE_DETALIS } from "../type";

const inital = {
    allStores: [],
    oneStore:[],
    allStoresType:[],
    loading: true,
}
const storesReducer = (state = inital, action) => {
    switch (action.type) {
           
            case GET_ALL_STORES:
                return {
                    ...state,
                    allStores: action.payload,
                    loading: false,
                }
           case GET_STORE_DETALIS:
                return {
                    ...state,
                    oneStore: action.payload,
                    loading: false,
                }
            case   GET_ALL_STORES_TYPE:
                return {
                    ...state,
                    allStoresType: action.payload,
                    loading: false,
                }
         
            case GET_ERROR:
              return {
                loading: true,
                allStores: action.payload,
            }
            default:
              return state;
    }
}
export default storesReducer