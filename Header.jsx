import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  return (
    <div className="bg-danger">
      <div className="navbar py-3">
        <div className="container-xl d-flex justify-content-between align-items-center">

          <span className="navbar-brand fw-bold text-white">
            Clovers.
          </span>

          <input
            className="form-control w-25"
            type="search"
            placeholder="Search Here"
          />

          <ul className="navbar-nav d-flex flex-row gap-3 align-items-center fs-4">
 

            <li className="nav-item">

             <button className="btn p-0 display-5" onClick={()=>navigate("/")}><i className="fa-solid fa-house text-white"></i></button> 
            </li>


            <li className="nav-item">
            <button className="btn p-0"><i className="fa-solid fa-location-dot text-white"></i></button>  
            </li>

            <li className="nav-item">
            <button className="btn p-0"><i className="fa-regular fa-heart text-white"></i></button>
            </li>

            <li className="nav-item position-relative">
              <button
                className="btn p-0"
                onClick={() => navigate("/cart")}
              >
                <i className="fa-solid fa-cart-shopping text-white"></i>
              </button>

              {/* CART COUNT */}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
              >
                {cartCount}
              </span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
