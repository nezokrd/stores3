import {GET_ALL_CITIES, GET_ERROR } from "../type";

const inital = {
    allCities: [],

    loading: true,
}
const citiesReducer = (state = inital, action) => {
    switch (action.type) {
           
            case GET_ALL_CITIES:
                return {
                    ...state,
                    allCities: action.payload,
                    loading: false,
                }
            
         
            case GET_ERROR:
              return {
                loading: true,
                allCities: action.payload,
            }
            default:
              return state;
    }
}
export default citiesReducer