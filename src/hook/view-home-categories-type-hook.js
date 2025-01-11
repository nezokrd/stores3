import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllStores } from '../redux/actions/storesAction';
import { getAllCategories, getAllCategoriesByTypeID } from '../redux/actions/categoryAction';


const ViewHomeCategoriesTypeHook = (typeid) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCategoriesByTypeID(typeid))
    },[])
    
    const AllCategories = useSelector((state) => state.allcategories.allCategoriesType)
    //console.log('cattype')
    
    let CategoriesType = [];
    if (AllCategories)
        CategoriesType = AllCategories;
        //Stores = allStores.slice(0, 4);
    else
       CategoriesType = []

    
    return [CategoriesType]

}

export default ViewHomeCategoriesTypeHook