import {
    SET_PRODUCTS,
    SET_SELECTED_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    MODAL_VISIBILITY
} from '../actions/productActions';

const initialState = {
    products: [],
    selectedProduct: null,
    showModal:false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [ action.payload,...state.products],
            };
        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product
                ),
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
            };
        case MODAL_VISIBILITY:
            return {
                ...state,
                showModal: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
