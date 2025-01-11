import {Container,Row} from 'react-bootstrap'
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Category from './Components/Category';
import ItemsList from './Components/ItemsList'
import { useEffect, useState } from 'react';
import ViewHomeStoresHook from './hook/view-home-stores-hook';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStores } from './redux/actions/storesAction';
import { getAllCategories, getAllCategoriesByTypeID } from './redux/actions/categoryAction';
import ViewHomeCategoriesHook from './hook/view-home-categories-hook';
import ViewOneStoreHook from './hook/view-onestore-hook';
import  Home  from './pages/home/Home';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import ProductsPageLocalStores from './pages/ProductsTypes/ProductsLocalStoresPage';
import ProductsFamilesProductsPage from './pages/ProductsTypes/ProductsFamilesProductsPage';
import ProductsEcommercePage from './pages/ProductsTypes/ProductsEcommercePage';
import StoreDetailsPage from './pages/Stores/StoreDetailsPage';

function App() {
 

  return (
    <div>
     
     <HashRouter>
        <Routes>
          <Route  index   element={<Home/>}/>
          <Route path="/ProductsEcommercePage"   element={<ProductsEcommercePage/>}/>
          <Route path="/ProductsPageLocalStores"   element={<ProductsPageLocalStores/>}/>
          <Route path="/ProductsFamilesProductsPage"   element={<ProductsFamilesProductsPage/>}/>
          <Route path="/StoreDetailsPage/:id"   element={<StoreDetailsPage/>}/> 
          
          
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
