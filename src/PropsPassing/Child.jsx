import { Link } from "react-router-dom";
import "../Product.css";
import React, { memo } from "react";

function Child({ data }) {
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="items-holder">
                <div className="items">
                  {Array.isArray(data) &&
                    data.slice(12, 15).map((item) => {
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
                              <Link to={`/parent/${item.id}`} className="btn btn-primary">
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
      </main>
    </>
  );
}

export default memo(Child);
