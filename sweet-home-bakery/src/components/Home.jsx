import "../css/Home.css";
import heroImg from "../assets/Croissant.jpg";

function Home() {
  return (
    <section className="hero">
      {/* LEFT CONTENT */}
      <div className="hero-text">
        <span className="hero-badge">✨ Fresh from our kitchen daily</span>

        <h1>
          Handcrafted <br />
          <span>with Love</span>
        </h1>

        <p>
          Bringing warmth to your home with artisan baked goods made from scratch
          using traditional recipes and the finest ingredients.
        </p>

        <div className="hero-buttons">
          <button className="hero-primary">View Our Menu</button>
          <button className="hero-secondary">Custom Orders</button>
        </div>

        <div className="hero-stats">
          <div>
            <strong>500+</strong>
            <span>Happy Customers</span>
          </div>
          <div>
            <strong>50+</strong>
            <span>Unique Recipes</span>
          </div>
          <div>
            <strong>5 yrs</strong>
            <span>Experience</span>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <img src={heroImg} alt="Croissant" />
        <span className="image-badge">Made Fresh Daily</span>

        {/* BEST SELLER CARD */}
        <div className="best-seller">
          🥐
          <div className="best-seller-text">
            <strong>Best Seller</strong>
            <span>Butter Croissants</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
