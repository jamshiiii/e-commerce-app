import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const Showproducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center pb-4 mb-4">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </div>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="products"
                  height="300px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 15)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-4 ">
      <div className="row">
        <div className="col-12 mb-4">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <Showproducts />}
      </div>
    </div>
  );
};

export default Products;
