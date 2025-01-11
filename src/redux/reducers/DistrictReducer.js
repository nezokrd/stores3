import { GET_ALL_DISTRICTS, GET_ERROR } from "../type";

const inital = {
    allDistricts: [],

    loading: true,
}
const districtReducer = (state = inital, action) => {
    switch (action.type) {
           
            case GET_ALL_DISTRICTS:
                return {
                    ...state,
                    allDistricts:action.payload,
                    loading: false,
                }
            
         
            case GET_ERROR:
              return {
                loading: true,
                allDistricts: action.payload,
            }
            default:
              return state;
    }
}
export default districtReducer