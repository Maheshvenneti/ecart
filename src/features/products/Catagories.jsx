const CategoriesList = ({ setSelectedCategories, selectedCategories }) => {
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];

  return (
    <div className="sidebar px-0">
      <h2 className="font-xbold body-font border-bottom filter-title">
        Categories
      </h2>
      <div className="mb-3 filter-options">
        {categories.map((cat) => (
          <div className="custom-control custom-checkbox mb-3" key={cat}>
            <input
              type="checkbox"
              className="custom-control-input"
              id={`cat-${cat}`}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedCategories((prev) => [...prev, cat]);
                } else {
                  setSelectedCategories((prev) =>
                    prev.filter((c) => c !== cat)
                  );
                }
              }}
            />
            <label className="custom-control-label" htmlFor={`cat-${cat}`}>
              {cat}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
