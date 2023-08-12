import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Laptop } from "./assets/images/Images";
import "./Product.css";
export default function Product() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((element) => setProducts(element));
  }, []);
  console.log(products);
  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="items-holder">
                <div className="items">
                  {Array.isArray(products) &&
                    products.map((item) => {
                      return (
                        <div className="item" key={item.id}>
                          <div className="card">
                            <figure className="card-img-top">
                              <img src={item.image} alt="" />
                            </figure>
                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                              <h6 className="card-price">${item.price}</h6>
                              <p className="card-text">{item.description.slice(0, 100)}</p>
                              <Link to={`/product/${item.id}`} className="btn btn-primary">
                                View More
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
