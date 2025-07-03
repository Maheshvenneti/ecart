import Slider from "react-slick";
import Button from "react-bootstrap/Button";
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

function SimpleSlider() {
  const url = "https://dummyjson.com/products/category-list";

  const { data: categoriesData, loading } = useApiGet(url);

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
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="container mt-5 mb-5">
          <h3 style={{ textAlign: "center" }}>Top Categories</h3>
          {categoriesData && (
            <Slider {...settings}>
              {categoriesData.map((item) => {
                return <Button variant="primary">{item}</Button>;
              })}
            </Slider>
          )}
        </div>
      )}
    </>
  );
}

export default SimpleSlider;
