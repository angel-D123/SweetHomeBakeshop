import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import DeliveryPickup from "./components/DeliveryPickup";
import Testimonials from "./components/Testimonials";
import CustomOrder from "./components/CustomOrder";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import { CartProvider, useCart } from "./context/CartContext";

function AppContent() {
  const { page } = useCart();

  const isOverlayOpen = page === "cart" || page === "checkout";

  return (
    <>
      {/* 👉 Navbar ONLY kapag walang overlay */}
      {!isOverlayOpen && <Navbar />}

      {/* MAIN SCROLLABLE CONTENT */}
      <section id="home"><Home /></section>
      <section id="menu"><Home2 /></section>
      <section id="delivery"><DeliveryPickup /></section>
      <section id="reviews"><Testimonials /></section>
      <section id="order"><CustomOrder /></section>

      <Footer />

      {/* OVERLAYS */}
      {page === "cart" && <CartPage />}
      {page === "checkout" && <CheckoutPage />}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
