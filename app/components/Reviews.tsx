import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <h2>Customer Reviews</h2>

        <div className="reviews-grid">
          {reviews.map((item) => (
            <div className="review-card" key={item.name}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>&ldquo;{item.review}&rdquo;</p>
              <h4>— {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
