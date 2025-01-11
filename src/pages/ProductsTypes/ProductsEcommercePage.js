import React from 'react'
import {Container,Row} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar';
import Header from '../../Components/Header';
import Category from '../../Components/Category';
import ItemsList from '../../Components/ItemsList';
import ViewStoresTypeHook from '../../hook/view-stores-Type-hook.js';
import ViewHomeCategoriesTypeHook from '../../hook/view-home-categories-type-hook.js';
import { useDispatch } from 'react-redux';
import ViewHomeCategoriesHook from '../../hook/view-home-categories-hook.js';
import ViewRegionsHook from '../../hook/view-Regions-hook.js';
import ViewCitiesHook from '../../hook/view-cities-hook.js';
import ViewDistrictsHook from '../../hook/view-districts-hook.js';
import FilterAddress from '../../Components/FilterAddress.js';


 const ProductsEcommercePage = () => {
  
    const title="قائمة المتاجر الكترونية";
    const [StoresTypes]=ViewStoresTypeHook(1);
    const [CategoriesType]=ViewHomeCategoriesTypeHook(1);
    const [Categories]=ViewHomeCategoriesHook();

    const [Regions]=ViewRegionsHook();
    const [Cities]=ViewCitiesHook();
    const [Distrcts]=ViewDistrictsHook();

    //const [store]=ViewOneStoreHook();
    console.log(StoresTypes)
    console.log(CategoriesType)
    console.log(Categories)
   
    const [storesData,setstoresData]=useState([]);
  
    //setstoresData(StoresTypes);
    useEffect(()=>{setstoresData(StoresTypes)},[StoresTypes])

    console.log(storesData)
  

    const AllCategoriesMenu=['الكل',...new Set(CategoriesType)];
    console.log(AllCategoriesMenu);
    


  
    function getIdByName(name,items) {
      
      const item = items.find(item => item.categoryNameAr === name);
      console.log(item.categoryID)
      return item.categoryID ? item.categoryID : "-1";
    }
    const FilterByCategory=(catname)=>{
        if(catname==="الكل"){
          
          setstoresData(StoresTypes);
        }
        else{
          const catid=getIdByName(catname,Categories)
          console.log(catid)
          const newarr=StoresTypes.filter((item)=>item.categoryID===catid);
          console.log(newarr)
          setstoresData(newarr);
          
        }
  
    }
    const filterbySearch=(word)=>{
  
        if(word !==""){
          const newarr=StoresTypes.filter((item)=>item.name==word)
          setstoresData(newarr);
        }
  
    }


    const changeitem=(data)=>{
      setstoresData(data);
    }
    return (
  
      <div>
      <NavBar  filterbySearch={filterbySearch}/>
      <Container>
         <Row>
         <Header title={title}/>
         <Category FilterByCategory={FilterByCategory} AllCategory={AllCategoriesMenu}/>
         <FilterAddress Regions={Regions} Cities={Cities} Distrcts={Distrcts} itemsData={StoresTypes} changeitem={changeitem}/>

         <ItemsList itemsData={storesData}/>
      
         </Row>
  
      </Container>
      </div>
    )
}
export default ProductsEcommercePage