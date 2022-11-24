import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/action/productAction";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  //  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  });
  //console.log("Product", products);
  return (
    <div>
      <Link to="practice">
        <h1>Practice</h1>
      </Link>
      <Link to="myComponent">
        <h1>MyComponent</h1>
      </Link>
      <span></span>
      <h1>Product-Listing</h1>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
