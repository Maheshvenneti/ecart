import React from 'react'

const FirstSection = () => {
  return (
    <div>
      <section className="cart">
        <div className="cart-wrapper">
          <article className="cart-content">
            <div className="cart-image">
              <img
                src="https://i.imghippo.com/files/MUpc4942ERI.png"
                alt="product"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="section wrapper wrapper-section">
        <div className="container wrapper-column">
          <div className="wrapper-bgimage">
            <img
              src="https://i.ibb.co.com/DDSPD2h/product-image-1.png"
              className="wrapper-image"
              alt="product"
            />
          </div>
          <div className="wrapper-content">
            <div className="wrapper-inform">
              <span className="badge badge-darken">Man's Shoes</span>
              <h1 className="display-medium font-bold">Nike Air Motion</h1>
              <p className="text-base font-normal">
                The combine of breathable mesh without seams for wonderful
                traditional and modern style to add the perfect amount of flash
                to make you shine.
              </p>
            </div>
            <div className="wrapper-detail">
              <div className="price">
                <span className="text-base font-medium">Price:</span>
                <h3 className="text-large font-semi">$199.00</h3>
              </div>
              <div className="sizes">
                <span className="text-base font-medium">Rating:</span>
                <ul className="sizes-lists">
                  <li className="sizes-item is-select">37</li>
                  <li className="sizes-item">39</li>
                  <li className="sizes-item">41</li>
                  <li className="sizes-item">43</li>
                  <li className="sizes-item">45</li>
                </ul>
              </div>
            </div>
            <div className="wrapper-action">
              <button className="btn btn-darken">Add to Bag</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FirstSection