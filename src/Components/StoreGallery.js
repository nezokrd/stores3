import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery"
import storeimage from '../images/storeimage.jpg'
import LeftButton from '../images/next.png';
import RightButton from '../images/prev.png';

 const StoreGallery = ({store}) => {
  console.log(store.photo)


   //to view images gallery
 let imgs=[store.photo]
 console.log(imgs);
 let images = []
 if (store.photo)
     images = imgs.map((img) => { return { original: img } })
 else {
     images = [{ original: `${storeimage}` }]
 }
 


 
  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-4">

   
    <ImageGallery items={images}
    defaultImage={storeimage}
    showFullscreenButton={false}
    isRTL={true}
    showPlayButton={false}
    showThumbnails={false}
    renderRightNav={RightButton}
    renderLeftNav={LeftButton}
    
     />;
  

    </div>
  )
}
export default StoreGallery