import { useState } from "react";
import "../css/Home2.css";
import { useCart } from "../context/CartContext";

// IMAGES
import almondDanish from "../assets/almond_danish.png";
import sourdough from "../assets/artisan_sourdough.png";
import croissant from "../assets/butter_croissant.png";
import cinnamonRolls from "../assets/cinnamon_rolls.png";
import cookies from "../assets/cookies.png";
import strawberryCroissant from "../assets/strawberry_croissant.png";
import cupcakes from "../assets/vanilla_cupcakes.png";
import baguette from "../assets/french_baguette.png";
import fudgeCake from "../assets/fudge_cake.png";

function Home2() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const products = [
    {
      title: "Classic Butter Croissants",
      price: "₱130",
      desc: "Flaky, golden layers of buttery perfection. Made fresh every morning.",
      img: croissant,
      category: "Pastries",
      badge: true,
    },
    {
      title: "Cinnamon Rolls",
      price: "₱150",
      desc: "Soft, gooey cinnamon swirls topped with cream cheese frosting.",
      img: cinnamonRolls,
      category: "Pastries",
      badge: true,
    },
    {
      title: "Artisan Sourdough Bread",
      price: "₱320",
      desc: "Crusty exterior, soft tangy interior. 48-hour fermented.",
      img: sourdough,
      category: "Breads",
    },
    {
      title: "Strawberry Cream Croissant",
      price: "₱180",
      desc: "Fresh strawberries and vanilla cream in a flaky croissant.",
      img: strawberryCroissant,
      category: "Pastries",
      badge: true,
    },
    {
      title: "Chocolate Chip Cookies",
      price: "₱85",
      desc: "Soft-baked cookies loaded with rich chocolate chips.",
      img: cookies,
      category: "Cookies",
    },
    {
      title: "Vanilla Cupcakes",
      price: "₱110",
      desc: "Light and fluffy cupcakes topped with vanilla buttercream.",
      img: cupcakes,
      category: "Cakes",
    },
    {
      title: "Almond Danish",
      price: "₱160",
      desc: "Buttery pastry filled with almond cream.",
      img: almondDanish,
      category: "Pastries",
    },
    {
      title: "French Baguette",
      price: "₱140",
      desc: "Crispy crust with a soft and airy center.",
      img: baguette,
      category: "Breads",
    },
    {
      title: "Chocolate Fudge Cake",
      price: "₱200",
      desc: "Rich, moist chocolate cake with fudge frosting.",
      img: fudgeCake,
      category: "Cakes",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="home2">
      <div className="home2-header">
        <span className="section-badge">Our Selection</span>
        <h2>Signature Baked Goods</h2>
        <p>
          Each item is crafted with care using time-honored recipes and the
          finest ingredients.
        </p>

        {/* CATEGORY TABS */}
        <div className="category-tabs">
          {["All", "Pastries", "Breads", "Cookies", "Cakes"].map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="products-grid">
        {filteredProducts.map((item, index) => (
          <ProductCard
            key={index}
            {...item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ img, title, price, desc, badge, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ title, price, img });
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="product-card">
      {badge && <span className="product-badge">★ Bestseller</span>}

      <img src={img} alt={title} className="product-img" />

      <div className="product-info">
        <div className="product-title">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>

        <p>{desc}</p>

        <button
          className={`add-cart ${added ? "added" : ""}`}
          onClick={handleAdd}
          disabled={added}
        >
          {added ? "✔ Added" : "＋ Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Home2;
