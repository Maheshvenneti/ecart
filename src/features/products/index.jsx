import React, { useState, useEffect } from "react";
import ItemLeftFilterSection from "./ItemLeftFilterSection";
import AllProducts from "./AllProducts";
import useApiGet from "../../hooks/useApiGet";

const ProductIndex = () => {
  const url = "https://dummyjson.com/products";
  const { data, loading } = useApiGet(url);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (data && data.products) {
      setProductData(data.products);
    }
  }, [data]);

  return (
    <>
      <div className="search-section">
        <div className="container-fluid container-xl">
          {loading ? (
            <h1>loading...</h1>
          ) : (
            data && (
              <div className="row main-content ml-md-0">
                <ItemLeftFilterSection />
                <AllProducts allProducts={productData} />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProductIndex;
