export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const MODAL_VISIBILITY = 'MODAL_VISIBILITY';

export const ShowModal = (payLoad) => ({
    type: MODAL_VISIBILITY,
    payload: payLoad,
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products,
});

export const setSelectedProduct = (product) => ({
    type: SET_SELECTED_PRODUCT,
    payload: product,
});



export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});

export const editProduct = (product) => ({
    type: EDIT_PRODUCT,
    payload: product,
});

export const deleteProduct = (productId) => ({
    type: DELETE_PRODUCT,
    payload: productId,
});
