import {combineReducers} from 'redux'
import storesReducer from './storesReducer'
import categoriesReducer from './categoryReducer'
import regionsReducer from './regionReducer'
import citiesReducer from './cityReducer'
import districtReducer from './DistrictReducer'


export default combineReducers({
 
    allstores:storesReducer,
    allcategories:categoriesReducer,
    allRegions:regionsReducer,
    allcities:citiesReducer,
    alldistricts:districtReducer,
    
})