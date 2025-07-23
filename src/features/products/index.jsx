import React, { useState, useEffect, createContext } from "react";
import ItemLeftFilterSection from "./ItemLeftFilterSection";
import AllProducts from "./AllProducts";
import useApiGet from "../../hooks/useApiGet";

export const Store = createContext();

const ProductIndex = () => {
  const url = "https://dummyjson.com/products";
  const { data, loading } = useApiGet(url);
  const [productData, setProductData] = useState([]);
  const [sortOrder, setSortOrder] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    let filteredData = [];
    if (data && data.products) {
      filteredData = [...data.products]; //copy

      //sorting
      if (sortOrder === "lowtohigh") {
        filteredData.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "hightolow") {
        filteredData.sort((a, b) => b.price - a.price);
      }

      //check box filter

      if (selectedCategories.length > 0) {
        filteredData = filteredData.filter((item) =>
          selectedCategories.includes(item.category)
        );
      }

      setProductData(filteredData);
    }
  }, [data, sortOrder, selectedCategories]);

  return (
    <Store.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        sortOrder,
        setSortOrder,
        productData,
        setProductData,
      }}
    >
      <div className="search-section">
        <div className="container-fluid container-xl">
          {loading ? (
            <h1>loading...</h1>
          ) : (
            data && (
              <div className="row main-content ml-md-0">
                <ItemLeftFilterSection />
                <AllProducts />
              </div>
            )
          )}
        </div>
      </div>
    </Store.Provider>
  );
};

export default ProductIndex;
