import Slider from "react-slick";
import CardComponent from "../../components/Card";
import { useNavigate } from "react-router-dom";
import useApiGet from "../../hooks/useApiGet";

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
  const url = "https://dummyjson.com/products/category/smartphones";
  const { data: cardsData, loading } = useApiGet(url);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleNavigate = () => {
    navigate("/product-detail");
  };

  return (
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="container mt-5 mb-5">
          <h3 style={{ textAlign: "left" }}>
            Grab the best deals on smartphones
          </h3>
          {cardsData && (
            <Slider {...settings}>
              {cardsData.products.map((item) => {
                return <CardComponent data={item} onClick={handleNavigate} />;
              })}
            </Slider>
          )}
        </div>
      )}
    </>
  );
};

export default CardCarousal;
