import { useCart } from "../context/CartContext";
import "../css/CheckoutPage.css";

function CheckoutPage() {
  const { cartItems, setPage } = useCart();

  // SAFE price parser (string or number)
  const getPrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      return Number(price.replace(/[^\d.]/g, ""));
    }
    return 0;
  };

  const total = cartItems.reduce(
    (sum, item) => sum + getPrice(item.price) * item.qty,
    0
  );

  return (
    <div className="checkout-overlay">
      <div className="checkout-drawer">
        {/* HEADER */}
        <div className="checkout-header">
          <div>
            <h2>Checkout</h2>
            <span className="item-count">
              {cartItems.length} items
            </span>
          </div>

          <button
            className="close-btn"
            onClick={() => setPage("cart")}
          >
            ✕
          </button>
        </div>

        {/* ITEMS */}
        <div className="checkout-section">
          {cartItems.map((item, index) => (
            <div className="checkout-item" key={index}>
              <span>
                {item.title} × {item.qty}
              </span>
              <span>
                ₱{(getPrice(item.price) * item.qty).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="checkout-total">
          <span>Total</span>
          <strong>₱{total.toFixed(2)}</strong>
        </div>

        {/* PAYMENT */}
        <div className="checkout-section">
          <h3>Payment Method</h3>

          <label className="payment-option">
            <input type="radio" name="payment" defaultChecked />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input type="radio" name="payment" />
            GCash
          </label>

          <label className="payment-option">
            <input type="radio" name="payment" />
            Maya
          </label>

          <label className="payment-option">
            <input type="radio" name="payment" />
            Card
          </label>
        </div>

        {/* PLACE ORDER */}
        <button className="place-order">
          Place Order • ₱{total.toFixed(2)}
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
