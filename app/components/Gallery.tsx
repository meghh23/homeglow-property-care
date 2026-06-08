import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/before-after-1.jpg", alt: "Before and After Cleaning — Kitchen" },
  { src: "/images/before-after-2.jpg", alt: "Before and After Cleaning — Bathroom" },
];

export default function Gallery({
  limit,
  hideHeading,
}: {
  limit?: number;
  hideHeading?: boolean;
}) {
  const items = limit ? images.slice(0, limit) : images;

  return (
    <section className="gallery">
      <div className="container">
        {!hideHeading && <h2>Before &amp; After Results</h2>}

        {!hideHeading && (
          <p className="gallery-subtitle section-subtitle">
            See the difference our professional cleaning services can make.
          </p>
        )}

        <div className="gallery-grid">
          {items.map((img) => (
            <div className="gallery-card" key={img.src}>
              <Image src={img.src} alt={img.alt} width={600} height={400} />
            </div>
          ))}
        </div>

        {limit && (
          <div className="section-cta">
            <Link href="/gallery" className="text-link">
              View full gallery →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
