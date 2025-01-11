import React from 'react'
import { Col, Row } from 'react-bootstrap'
import StoreGallery from './StoreGallery'
import StoreText from './StoreText'
import { useParams } from 'react-router-dom';
import ViewOneStoreHook from '../hook/view-onestore-hook';


 const ProductsDetails = ({store}) => {

  
  return (
    <div>
        <Row>
          <Col lg="4"> <StoreGallery store={store}/> </Col>
          <Col lg="8">   <StoreText  store={store}/> </Col>

        </Row>

    </div>
  )
}
export default ProductsDetails