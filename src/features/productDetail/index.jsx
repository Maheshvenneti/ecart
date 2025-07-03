import FirstSection from "./FirstSection";
import ReviewSection from "./ReviewSection";
import useApiGet from "../../hooks/useApiGet";

const Index = () => {
  const url = "https://dummyjson.com/products/1";
  const { data: productData, loading } = useApiGet(url);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <>
          {productData && (
            <>
              <FirstSection />
              <ReviewSection reviews={productData?.reviews} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Index;
