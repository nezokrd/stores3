import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneStore } from '../../redux/actions/storesAction';
import { Container } from 'react-bootstrap';
import ProductsDetails from '../../Components/ProductsDetails';
import NavBar from '../../Components/NavBar';
import ViewOneStoreHook from '../../hook/view-onestore-hook';
import { useParams } from 'react-router-dom';

 const StoreDetailsPage = () => {
    const { id } = useParams();
  
    const [store]=ViewOneStoreHook(id);
    
   
  return (
    <div style={{ minHeight: '670px' }}>
    <NavBar/>
    <Container>
     <ProductsDetails store={store}/>
    
    </Container>
    
    </div>
  )
}
export default StoreDetailsPage