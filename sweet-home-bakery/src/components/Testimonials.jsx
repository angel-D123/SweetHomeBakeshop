import "../css/Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <span className="badge">Customer Love</span>
      <h2>What Our Customers Say</h2>
      <p className="subtitle">
        Don't just take our word for it – hear from our happy customers
      </p>

      {/* TOP ROW */}
      <div className="testimonial-row">
        <TestimonialCard
          stars={5}
          text="The cinnamon rolls are to die for! Warm, gooey, and the perfect amount of frosting. I'm addicted!"
          initial="A"
          name="Angel D."
          time="3 weeks ago"
        />

        <TestimonialCard
          stars={4}
          text="Great sourdough bread with amazing crust. Delivery was fast and everything arrived fresh."
          initial="J"
          name="Jisung P."
          time="1 week ago"
        />
      </div>

      {/* BOTTOM ROW */}
      <div className="testimonial-row">
        <TestimonialCard
          stars={5}
          text="Best pastries in town! You can really tell everything is freshly baked."
          initial="J"
          name="Jeno L."
          time="2 weeks ago"
        />

        <TestimonialCard
          stars={5}
          text="Ordered a custom cake and it exceeded my expectations. Super delicious and beautiful!"
          initial="T"
          name="Taeyong L."
          time="1 month ago"
        />
      </div>

      {/* RATING PILL */}
      <div className="rating-pill">
        <span className="pill-stars">★★★★★</span>
        <div className="pill-text">
          <strong>4.9 out of 5</strong>
          <small>Based on 200+ reviews</small>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ stars, text, initial, name, time }) => {
  return (
    <div className="testimonial-card">
      <div className="quote">❞</div>

      <div className="stars">
        {"★".repeat(stars)}
        {"☆".repeat(5 - stars)}
      </div>

      <p className="text">"{text}"</p>

      <div className="user">
        <div className="avatar">{initial}</div>
        <div>
          <strong>{name}</strong>
          <small>Verified Customer</small>
        </div>
        <span className="time">{time}</span>
      </div>
    </div>
  );
};

export default Testimonials;
