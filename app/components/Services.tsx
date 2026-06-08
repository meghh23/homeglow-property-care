import Image from "next/image";

const services = [
  {
    title: "Domestic Cleaning",
    image: "/images/domestic-cleaning.jpg",
  },
  {
    title: "Office Cleaning",
    image: "/images/office-cleaning.jpg",
  },
  {
    title: "Deep Cleaning",
    image: "/images/deep-cleaning.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={350}
                />
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
