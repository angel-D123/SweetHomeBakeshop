import { useCart } from "../context/CartContext";
import "../css/CartPage.css";

function CartPage() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    setPage,
  } = useCart();

  const getPrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string")
      return Number(price.replace(/[^\d.]/g, ""));
    return 0;
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + getPrice(item.price) * item.qty,
    0
  );

  return (
    <div className="cart-overlay">
      <div className="cart-drawer">
        {/* HEADER */}
        <div className="cart-header">
          <div>
            <h2>Your Cart</h2>
            <span className="item-count">
              {cartItems.length} items
            </span>
          </div>

          <button className="close-btn" onClick={() => setPage("home")}>
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <div className="empty-icon"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#7a4a2e"><path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H390v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z"/></svg></div>
              <h3>Your cart is empty</h3>
              <p>Add some delicious treats to get started!</p>

              <button
                className="browse-btn"
                onClick={() => setPage("home")}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => {
              const price = getPrice(item.price);
              const total = price * item.qty;

              return (
                <div className="cart-item" key={index}>
                  <img src={item.img} alt={item.title} />

                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <span className="price">
                      ₱{price.toFixed(2)}
                    </span>

                    <div className="qty-controls">
                      <button onClick={() => decreaseQty(index)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(index)}>＋</button>
                    </div>
                  </div>

                  <div className="item-total">
                    ₱{total.toFixed(2)}
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => removeItem(index)}
                  >
                    🗑
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="subtotal">
              <span>Subtotal</span>
              <strong>₱{subtotal.toFixed(2)}</strong>
            </div>

            <div className="free-delivery">
              Free delivery on orders over ₱1,500!
            </div>

            <button
              className="checkout-btn"
              onClick={() => setPage("checkout")}
            >
              Checkout • ₱{subtotal.toFixed(2)}
            </button>

            {/* CLEAR CART */}
            <button
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
