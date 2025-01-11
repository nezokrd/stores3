import { GET_ALL_REGIONS, GET_ERROR } from "../type";

const inital = {
    allRegions: [],
    
    loading: true,
}
const regionsReducer = (state = inital, action) => {
    switch (action.type) {
           
            case GET_ALL_REGIONS:
                return {
                    ...state,
                    allRegions: action.payload,
                    loading: false,
                }
           
         
            case GET_ERROR:
              return {
                loading: true,
                allRegions: action.payload,
            }
            default:
              return state;
    }
}
export default regionsReducer