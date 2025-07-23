import CategoriesList from "./Catagories";

const ItemLeftFilterSection = ({
  sortOrder,
  setSortOrder,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleChange = (value) => {
    setSortOrder(value);
  };
  return (
    <>
      <div className="sidebar col-md-3 px-0">
        <h1 className="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
          <span className="mr-2 filter-close-btn">X</span>
          Filters
          <span className="ml-auto text-uppercase">Reset Filters</span>
        </h1>
        <div className="sidebar__inner ">
          <div className="filter-body">
            <div>
              <h2 className="border-bottom filter-title">Sorting by Files</h2>
              <div class="form-check form-check-inline mb-4">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="lowtohigh"
                  onClick={(e) => {
                    handleChange(e.target.value);
                  }}
                  checked={sortOrder === "lowtohigh"}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Low to High
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="hightolow"
                  onClick={(e) => {
                    handleChange(e.target.value);
                  }}
                  checked={sortOrder === "hightolow"}
                />
                <label class="form-check-label" for="inlineRadio2">
                  High to Low
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="all"
                  onClick={(e) => {
                    handleChange(e.target.value);
                  }}
                  checked={sortOrder === "all"}
                />
                <label class="form-check-label" for="inlineRadio3">
                  All
                </label>
              </div>

              <CategoriesList
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />

              <h2 className="font-xbold body-font border-bottom filter-title">
                Price Range
              </h2>
              <div className="mb-3 theme-clr xs2-font d-flex justify-content-between">
                <span id="slider-range-value1">$100</span>
                <span id="slider-range-value2">$10,000</span>
              </div>
              <div className="mb-30 filter-options">
                <div>
                  <div id="slider-range">
                    <form>
                      <div className="form-group">
                        <input type="range" className="form-control-range" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <h2 className="border-bottom filter-title">Services</h2>
              <div className="mb-3 filter-options">
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked
                  />
                  <label className="custom-control-label">Breakfast</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">Lunch</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">Donner</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">Cafe</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">Brunch</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">Other</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemLeftFilterSection;
