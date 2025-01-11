import React from 'react'
import { Col, Row } from 'react-bootstrap'


 const StoreText = ({store}) => {
 
    console.log(store)
  return (
    <div>
    <Row className="mt-4">
      <div className="cat-text">المعلومات الاساسية :</div>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
         الاسم:
          <div className="cat-rate d-inline mx-3">{store.name}</div>
        </div>
        
      </Col>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
         نوع المتجر:
          <div className="cat-rate d-inline mx-3">{store.typeName}</div>
        </div>
        
      </Col>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
         الفئة:
          <div className="cat-rate d-inline mx-3">{store.categoryName}</div>
        </div>
        
      </Col>
    </Row>



    <Row className="mt-2">
      <div className="cat-text">العنوان:</div>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
         المنطقة:
          <div className="cat-rate d-inline mx-3">{store.regionName}</div>
        </div>
        
      </Col>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
         المدينة:
          <div className="cat-rate d-inline mx-3">{store.cityName}</div>
        </div>
        
      </Col>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
         الحي:
          <div className="cat-rate d-inline mx-3">{store.districtsName}</div>
        </div>
        
      </Col>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
         العنوان:
          <div className="cat-rate d-inline mx-3">{store.address}</div>
        </div>
        
      </Col>
    </Row>

    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
         الموقع:
          <div className="cat-rate d-inline mx-3">{store.address}</div>
        </div>
        
      </Col>
    </Row>

    


    <Row>
      <Col md="8" className="mt-4">
        <div className="cat-text d-inline">التقييم :</div>
        <div className="barnd-text d-inline mx-1">{store.rating} </div>
      </Col>
    </Row>
 

    <Row className="mt-4">
      <div className="cat-text">المواصفات :</div>
    </Row>
    <Row className="mt-2">
      <Col md="10">
        <div className="product-description d-inline">
          {store.name}
        </div>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col md="12">

        <div className="product-cart-add px-3 py-3 d-inline mx-1">حفظ المتجر</div>
        <div className="product-cart-add2 px-3 py-3 d-inline mx-1"> قيم المتجر</div>
      </Col>
    </Row>
  </div>
  )
}
export default StoreText









