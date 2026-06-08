const reviews = [
  {
    name: "Sarah M.",
    review: "Fantastic service. My home looked brand new after the deep clean.",
  },
  {
    name: "James R.",
    review: "Very professional, reliable and friendly team.",
  },
  {
    name: "Emma T.",
    review: "Highly recommend HomeGlow Property Care. Excellent results.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
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
