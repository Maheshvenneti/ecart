import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CardComponent from "../../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const CardCarousal = () => {
  const [cardsData, setCardsData] = useState([]);
  const url = "https://dummyjson.com/products/category/smartphones";
  const navigate = useNavigate()

  const getAllCards = async () => {
    try {
      const response = await axios.get(url);
      setCardsData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleNavigate = ()=>{
    navigate("/product-detail")
  }

  return (
    <div className="container mt-5 mb-5">
      <h3 style={{ textAlign: "left" }}>Grab the best deals on smartphones</h3>
      <Slider {...settings}>
        {cardsData.map((item) => {
          return <CardComponent data={item} onClick={handleNavigate} />;
        })}
      </Slider>
    </div>
  );
};

export default CardCarousal;
