import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductDetils,
  addToWishlist,
  addToCart,
} from "../features/filterSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const paramsObject = useParams();

  const product = useSelector((state) => state.ProductDetail);
  // console.log(product);

  const handleAddtoCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  const handleAddtoWishlist = () => {
    dispatch(addToWishlist(product));
  };

  useEffect(() => {
    dispatch(fetchProductDetils(paramsObject.id));
  }, []);
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    margin: "auto",
                  }}
                  className="rounded-4 fit"
                  src={product.productImageURL}
                  alt="Main product"
                />
              </div>
              {/* Multiple product images Div */}
              {/* <div className="d-flex justify-content-center mb-3">
                {[
                  "big1.webp",
                  "big2.webp",
                  "big3.webp",
                  "big4.webp",
                  "big.webp",
                ].map((img, index) => (
                  <a
                    key={index}
                    data-fslightbox="mygalley"
                    className="border mx-1 rounded-2 item-thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-type="image"
                    href={https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/${img}}
                  >
                    <img
                      width="60"
                      height="60"
                      className="rounded-2"
                      src={https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/${img}}
                      alt={Thumbnail ${index + 1}}
                    />
                  </a>
                ))}
              </div> */}
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">{product.productName}</h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">
                      {" "}
                      {product.productRating} Stars{" "}
                    </span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>154
                    orders
                  </span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">
                    <h5>Rs. {product.productPrice}</h5>
                  </span>
                  <span className="text-muted">/per box</span>
                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired
                  collection that continues to break away from the conventions
                  of mainstream fashion. Made in Italy, these black and brown
                  clothing low-top shirts for men.
                </p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">{product.category}</dd>

                  <dt className="col-3">Gender:</dt>
                  <dd className="col-9">{product.genderType}</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>

                  {/* <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd> */}
                </div>

                <hr />

                {/* <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: "35px" }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder="14"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}

                <button
                  onClick={() => handleAddtoCart(product)}
                  className="btn btn-dark shadow-0"
                >
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                </button>
                <button
                  onClick={() => handleAddtoWishlist(product)}
                  className="btn btn-dark shadow-0 ms-4"
                >
                  <i className="me-1 fa fa-shopping-basket"></i> Add to Wishlist
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
