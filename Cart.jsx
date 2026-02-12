import { useContext } from "react";
import { CartContext } from "./CartContext";
import Header from "./Header";
import Footer from "./Footer";

export default function Cart() {
  const {
    cart,
    updateQty,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  //  SAFE clear cart
  const clearCartLocal = () => {
    const cartItems = [...cart];
    cartItems.forEach((item) => removeFromCart(item.id));
  };

  const handleBuy = (item) => {
    alert(
      `Order Placed!\n\nProduct: ${item.name}\nQuantity: ${item.qty}\nTotal: ₹${item.price * item.qty}`
    );

    clearCartLocal(); // empty cart
  };

  const handleBuyAll = () => {
    alert(`Order Placed!\n\nTotal Amount: ₹ ${totalPrice}`);

    clearCartLocal(); // empty entire cart
  };

  return (
    <>
      <Header />

      <div className="container mt-4">
        <h3>My Cart</h3>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="card mb-3 p-3 d-flex flex-row align-items-center"
              >
                <img src={item.img} width="80" alt={item.name} />

                <div className="ms-3">
                  <h5>{item.name}</h5>
                  <p>₹ {item.price}</p>
                </div>

                <div className="d-flex gap-2 align-items-center mx-auto">
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => updateQty(item.id, "dec")}
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => updateQty(item.id, "inc")}
                  >
                    +
                  </button>
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleBuy(item)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}

            <h4 className="text-end mt-3">
              Total: ₹ {totalPrice}
            </h4>

            <div className="text-end mt-2">
              <button
                className="btn btn-primary"
                onClick={handleBuyAll}
              >
                Buy All
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
