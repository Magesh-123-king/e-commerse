import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Blog({ obj }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(obj);      
    navigate("/Cart");  
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 card bg-light text-center p-3">

      <img
        src={obj.img}
        alt={obj.name}
        className="img-fluid mx-auto"
        style={{ maxWidth: "200px" }}
      />

      <div className="card-body">
        <p className="h5">{obj.name}</p>
        <p className="h6 text-danger">₹{obj.price}</p>
      </div>

      <button
        className="btn btn-dark w-100"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

    </div>
  );
}
