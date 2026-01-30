import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Testimonials from "./components/Testimonials";
import DeliveryPickup from "./components/DeliveryPickup";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import CustomOrder from "./components/CustomOrder";
import Footer from "./components/Footer";
import { CartProvider, useCart } from "./context/CartContext";

function AppContent() {
  const { page } = useCart();

  return (
    <>
      <Navbar />

      {page === "home" && (
        <>
          <Home />
          <Home2 />
          <DeliveryPickup />
          <Testimonials />
          <CustomOrder />
          <Footer />
        </>
      )}

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
