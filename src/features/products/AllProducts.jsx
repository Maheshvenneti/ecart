import { useNavigate } from "react-router-dom";

const AllProducts = ({ allProducts }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <>
      <div className="content col-md-9">
        <div className="d-flex justify-content-between border-bottom align-items-center">
          <h2 className="title">Products</h2>
        </div>
        <div className="row">
          <div className="vertical">
            {allProducts.map((item) => {
              return (
                <div
                  class="card dark"
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                >
                  <img src={item.thumbnail} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div class="text-section">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.brand}</p>
                    </div>
                    <div class="cta-section">
                      <div>{item.price}</div>
                      <a href="#" class="btn btn-light">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
