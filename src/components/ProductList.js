import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowModal, setProducts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from './Modal/Modal';
import './productList.css';
import Navbar from "./Navbar/Navbar";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, showModal } = useSelector((state) => state.product);
  const [loader, setLoader] = useState(false);
  const [text,setText]=useState('')

  const handleClose = () => {
    dispatch(ShowModal(false));
    setText('')
  }
const openModal=(id) => {
   setText(id)
   dispatch(ShowModal(true));
}
  useEffect(() => {
    const getProducts = async () => {
      setLoader(true);
      const { data } = await axios.get("https://dummyjson.com/products");
      dispatch(setProducts(data.products));
      setTimeout(() => {
        setLoader(false);
      }, 500);
    };
    getProducts();
  }, [dispatch]);

  return (
    <>
      <div className={`main-content ${showModal ? 'blur-background' : ''}`}>
        <div
          className={`card m-0 p-0 ${loader ? 'isLoad' : ''}`}
          style={{ height: loader ? "100vh" : '' }}
        >
          {loader ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="card-body text-primary p-0">
              <Navbar />
              <div className="product-list">
                <ul className="card-grid">
                  {products.map((product) => (
                    <li key={product.id} className="card-item" onClick={() => openModal(product.id)}>
                      <div className="card" style={{ width: "24rem" }}>
                        <div className="card-body">
                          <h5 className="card-title">
                            <span style={{ color: 'black' }}>Title: </span> {product.title}
                          </h5>
                          <p className="card-text"> <span style={{ color: 'black' }}>Description: </span> {product.description}</p>
                          <div className="d-flex justify-content-between">
                            <p>Total Price - {product.price}</p>
                            <Link to={`/product/${product.id}`} className="card-link">View Details</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal text={text} showModal={showModal} handleClose={handleClose} />
    </>
  );
};

export default ProductList;
