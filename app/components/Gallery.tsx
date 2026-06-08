import Image from "next/image";

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <h2>Before & After Results</h2>

        <p className="gallery-subtitle section-subtitle">
          See the difference our professional cleaning services can make.
        </p>

        <div className="gallery-grid">
          <div className="gallery-card">
            <Image
              src="/images/before-after-1.jpg"
              alt="Before and After Cleaning"
              width={600}
              height={400}
            />
          </div>

          <div className="gallery-card">
            <Image
              src="/images/before-after-2.jpg"
              alt="Before and After Cleaning"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}