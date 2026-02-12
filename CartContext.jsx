import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // UPDATE QTY
  const updateQty = (id, type) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty:
                  type === "inc"
                    ? item.qty + 1
                    : item.qty - 1,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // CART COUNT
  const cartCount = cart.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + Number(item.price) * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
