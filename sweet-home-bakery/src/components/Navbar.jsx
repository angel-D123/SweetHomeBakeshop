import { useState } from "react";
import "../css/Navbar.css";
import logo from "../assets/logo-copy.png";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems, setPage } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="Sweet Home Logo" className="nav-logo" />
        <div className="brand-text">
          <h1>Sweet Home Bakery</h1>
          <span>Est. 2026</span>
        </div>
      </div>

      {/* CENTER (DESKTOP) */}
      <nav className="nav-center">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#delivery">Delivery</a>
        <a href="#reviews">Reviews</a>
        <a href="#order">Order</a>
      </nav>

      {/* RIGHT */}
      <div className="nav-right">
        {/* PHONE */}
        <div className="phone">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#3a2a1a">
            <path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t58 66q34 26 72 46l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21-16 36t-37 13Z" />
          </svg>
          <span>(+63) 901-2345</span>
        </div>

        {/* CART */}
        <div
          className="cart"
          onClick={() => setPage("cart")}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5a3b22"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>

          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div>

        {/* HAMBURGER (MOBILE ONLY) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#delivery" onClick={() => setMenuOpen(false)}>Delivery</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#order" onClick={() => setMenuOpen(false)}>Order</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
