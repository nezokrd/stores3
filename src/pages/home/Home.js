import React from 'react'
import {Container,Row} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar';
import Header from '../../Components/Header';
import Category from '../../Components/Category';
import ItemsList from '../../Components/ItemsList';
import ViewHomeStoresHook from '../../hook/view-home-stores-hook';
import ViewHomeCategoriesHook from '../../hook/view-home-categories-hook';
import ViewRegionsHook from '../../hook/view-Regions-hook';
import ViewCitiesHook from '../../hook/view-cities-hook';
import ViewDistrictsHook from '../../hook/view-districts-hook';
import FilterAdress from '../../Components/FilterAddress';
import FilterAddress from '../../Components/FilterAddress';


 const Home = () => {
 
  //dispatch(getAllCategoriesByTypeID(2));
  //const AllCategoriesByTypeID = useSelector((state) => state.allcategories.allCategories)
  //console.log(AllCategoriesByTypeID)
  const title="قائمة المتاجر"
  const [Stores]=ViewHomeStoresHook();
  const [Categories]=ViewHomeCategoriesHook();
  const [Regions]=ViewRegionsHook();
  const [Cities]=ViewCitiesHook();
  const [Distrcts]=ViewDistrictsHook();

  console.log(Stores)

  const [itemsData,setItemsData]=useState([]);
  useEffect(()=>{setItemsData(Stores)},[Stores])
  //console.log(itemsData)
  //const StoresTypeID=Stores.filter((item)=>item.typeID==1)
  //console.log(StoresTypeID);
  const AllCategoriesName=Categories.map(category=>category.categoryNameAr)
  //const OneStore=Categories.map(category=>category.categoryNameAr)
  console.log(AllCategoriesName)
    
  const AllCategoriesMenu=['الكل',...new Set(AllCategoriesName)];

  function getIdByName(name,items) {
    
    const item = items.find(item => item.categoryNameAr === name);
    return item.categoryID ? item.categoryID : "-1";
  }
  const FilterByCategory=(catname)=>{
      if(catname==="الكل"){
        
        setItemsData(Stores);
      }
      else{
        const catid=getIdByName(catname,Categories)
        console.log(catid)
        const newarr=Stores.filter((item)=>item.categoryID===catid);
        setItemsData(newarr);
        
      }

  }
  const filterbySearch=(word)=>{

      if(word !==""){
        const newarr=Stores.filter((item)=>item.name==word)
        console.log(newarr)
        setItemsData(newarr);
      }

  }
  const changeitem=(data)=>{
    setItemsData(data);
  }
 
  return (

    <div>
    <NavBar title={title} filterbySearch={filterbySearch}/>
    <Container>
       <Row>
       <Header title={title}/>
         <Category FilterByCategory={FilterByCategory} AllCategory={AllCategoriesMenu}/>
         <FilterAddress Regions={Regions} Cities={Cities} Distrcts={Distrcts} itemsData={itemsData} changeitem={changeitem}/>
         <ItemsList  itemsData={itemsData} />
    
       </Row>

    </Container>
    </div>
  )
}
export default  Home
