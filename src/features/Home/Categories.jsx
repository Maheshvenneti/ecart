import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import axios from "axios";

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

function SimpleSlider() {
  const [categoriesData, setCategoriesData] = useState([]);
  const url = "https://dummyjson.com/products/category-list";

  const getAllCategories = async () => {
    try {
      const response = await axios.get(url);
      setCategoriesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
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
  return (
    <div className="container mt-5 mb-5">
      <h3 style={{ textAlign: "center" }}>Top Categories</h3>
      <Slider {...settings}>
        {categoriesData.map((item) => {
          return <Button variant="primary">{item}</Button>;
        })}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
