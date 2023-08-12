import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

export default function ProductDetails() {
  const [productsDetails, setProductsDetails] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((element) => setProductsDetails(element));
  }, []);
  let getUrl = useParams();
  console.log(getUrl);
  console.log(productsDetails);
  return (
    <main className="no-bg">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {Array.isArray(productsDetails) &&
                productsDetails.map((item) => {
                  return getUrl.id === item.id.toString() ? (
                    <div className="card card-details" key={item.id}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <figure className="card-img-top">
                            <img src={item.image} className="img-fluid rounded-start" alt={item.image} />
                          </figure>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <h5 className="card-text">
                              <small className="text-muted">{item.category}</small>
                            </h5>
                            <h3>${item.price}</h3>
                            <p className="card-text">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
