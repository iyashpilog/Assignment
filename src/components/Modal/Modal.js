// src/components/Modal.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct } from '../../redux/actions/productActions';

const initialState = {
    description: '',
    price: '',
    title: ""
};

const Modal = ({ showModal, handleClose, text }) => {
    const [productData, setProductData] = useState(initialState);
    const { products } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        if (text !== '') {
            const getData = products.find(({ id }) => id === text);
            if (getData) {
                setProductData(getData);
            }
        } else {
            setProductData(initialState);
        }
    }, [text, products]);

    useEffect(() => {
        if (!showModal) {
            setProductData(initialState);
        }
    }, [showModal]);

    const handleChange = ({ target }) => {
        setProductData({ ...productData, [target.name]: target.value });
    };

    const handleCreate=() => {
        if(Object.values(productData).includes('')){
         return alert("Please Fill All Field")
        }
        if(text !== '' ){
            // console.log(products.map((ele) => +ele.id === +text ? {...productData,id:+ele.id} : ele),'falcon')
            dispatch(editProduct(productData))
         handleClose()
         return 
     }
       
       dispatch(addProduct(productData))
       handleClose()
     }

    return (
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header py-2">
                        <h5 className="modal-title">Create New Product</h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body py-0">
                        <div className="mb-1">
                            <label htmlFor="product-title" className="col-form-label">Product Title:</label>
                            <input type="text" name='title' onChange={handleChange} value={productData.title} className="form-control" id="product-title" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="product-description" className="col-form-label">Product Description:</label>
                            <input type="text" name='description' onChange={handleChange} value={productData.description} className="form-control" id="product-description" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-price" className="col-form-label">Product Price:</label>
                            <input type="text" name='price' onChange={handleChange} value={productData.price} className="form-control" id="product-price" />
                        </div>
                    </div>
                    <div className="modal-footer py-2">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleCreate}>{text !== '' ? 'Update Data' : 'Create Data'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
