import React, { useState, useEffect } from "react";
import Child from "./Child";

export default function Parent() {
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((elm) => setProduct(elm))
      .catch((err) => console.log(err));
  }, []);
  // console.log(product);
  return (
    <>
      <Child data={product} />
    </>
  );
}
