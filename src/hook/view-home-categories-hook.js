import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllStores } from '../redux/actions/storesAction';
import { getAllCategories } from '../redux/actions/categoryAction';


const ViewHomeCategoriesHook = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCategories())
    },[])
    
    const AllCategories = useSelector((state) => state.allcategories.allCategories)
    console.log(AllCategories)
    
    let Categories = [];
    if (AllCategories)
        Categories = AllCategories;
        //Stores = allStores.slice(0, 4);
    else
    AllCategories = []

    console.log(AllCategories)
    return [Categories]

}

export default ViewHomeCategoriesHook