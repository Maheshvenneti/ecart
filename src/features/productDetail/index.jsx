import React,{useEffect, useState} from 'react'
import axios from "axios";
import FirstSection from './FirstSection'
import ReviewSection from './ReviewSection'


const Index = () => {

  const [productData, setProductData] = useState({});
  const url = "https://dummyjson.com/products/1";

  const productReview = async () => {
    try {
      const response = await axios.get(url);
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productReview();
  }, []);
  return (
    <div>
        <FirstSection/>
        <ReviewSection reviews={productData?.reviews}/>
    </div>
  )
}

export default Index