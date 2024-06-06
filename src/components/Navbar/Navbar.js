import { useDispatch, useSelector } from "react-redux";
import { ShowModal, setProducts } from "../../redux/actions/productActions";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { products } = useSelector((state) => state.product);
    const [prductData, setProductData] = useState(products);
  const dispatch = useDispatch();

  const filterSearch= ({target}) => {
    if(target.value === ''){
        return dispatch(setProducts(prductData));
    }
    const filterData = prductData.filter(({ title }) => title.substring(0,target.value.length).toUpperCase() === target.value.toUpperCase())
    dispatch(setProducts(filterData));
  }

//   const filterProductData = (e) => {
//     e.preventDefault()
//     if(search === ''){
//         return dispatch(setProducts(prductData));
//     }
//    const filterData = products.filter(({ title }) => title.toUpperCase() === search.toUpperCase())
//    dispatch(setProducts(filterData));
//   }

  useEffect(() => {
    setProductData(products);
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Total Product <span style={{fontSize:'12px'}}>({products.length})</span></span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => dispatch(ShowModal(true))}
              >
                Create Product
              </span>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="Search"
              placeholder="Search By Product Title"
              aria-label="Search"
              onChange={filterSearch}
            />
            {/* <button className="btn btn-outline-success" type="submit" onClick={filterProductData}>
              Search
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
