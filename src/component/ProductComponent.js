import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // console.log("aa", products);
  const renderList = products.map((product) => {
    const { title, image, price, category } = product;
    return (
      <div>
        <section class="featured-products-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="feature-product-box">
                  <Link to={"/productDetail/" + product.id}>
                    <figure class="feature-product-img">
                      <img src={image} class="img-fluid" alt="" width="200px" />
                    </figure>
                  </Link>
                  <div class="feature-text">
                    <h4>{title}</h4>
                    <span>${price}</span>
                    <p>
                      Categories:&nbsp; <b>{category}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
