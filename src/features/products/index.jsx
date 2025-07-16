import React, { useState, useEffect } from "react";
import ItemLeftFilterSection from "./ItemLeftFilterSection";
import AllProducts from "./AllProducts";
import useApiGet from "../../hooks/useApiGet";

const ProductIndex = () => {
  const url = "https://dummyjson.com/products";
  const { data, loading } = useApiGet(url);
  const [productData, setProductData] = useState([]);
  const [sortOrder, setSortOrder] = useState("all");
  const [selectedCata, setSelectedCata] = useState([])


  useEffect(() => {
    if (sortOrder === "all") {
      if (data && data.products) {
        setProductData(data.products);
      }
    } else if (sortOrder === "lowtohigh") {
      if (data && data.products) {
        let sortedData = [...data.products].sort((a, b) => a.price - b.price);
        setProductData(sortedData);
      }
    } else if (sortOrder === "hightolow") {
      if (data && data.products) {
        let sortedData = [...data.products].sort((a, b) => b.price - a.price);
        setProductData(sortedData);
      }
    }

    console.log("selected cata", selectedCata)
  }, [data, sortOrder, selectedCata]);

  return (
    <>
      <div className="search-section">
        <div className="container-fluid container-xl">
          {loading ? (
            <h1>loading...</h1>
          ) : (
            data && (
              <div className="row main-content ml-md-0">
                <ItemLeftFilterSection
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                />
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
