import Link from "next/link";
import type { Service } from "../data/services";

export default function ServicePricingBlock({ service }: { service: Service }) {
  return (
    <div className="service-pricing-block">
      <h2>Pricing Guide</h2>
      <p className="pricing-disclaimer">
        Prices are estimates only. Final quotes depend on property size,
        condition, location, workload and access. Contact us for a free,
        tailored quote.
      </p>

      <p className="service-pricing-from">
        <strong>{service.priceFrom}</strong>
      </p>

      {service.pricingType === "bedroom" && service.bedroomPrices && (
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Property Size</th>
              <th>Estimated Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Studio</td>
              <td>{service.bedroomPrices.studio}</td>
            </tr>
            <tr>
              <td>1 Bedroom</td>
              <td>{service.bedroomPrices.oneBed}</td>
            </tr>
            <tr>
              <td>2 Bedrooms</td>
              <td>{service.bedroomPrices.twoBed}</td>
            </tr>
            <tr>
              <td>3 Bedrooms</td>
              <td>{service.bedroomPrices.threeBed}</td>
            </tr>
            {service.bedroomPrices.fourBedPlus && (
              <tr>
                <td>4+ Bedrooms</td>
                <td>{service.bedroomPrices.fourBedPlus}</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {service.pricingType === "hourly" && service.hourlyRate && (
        <p className="pricing-rate">{service.hourlyRate}</p>
      )}

      {service.pricingType === "perRoom" && service.perRoomRate && (
        <p className="pricing-rate">{service.perRoomRate}</p>
      )}

      {service.flatNote && (
        <p className="pricing-flat-note">{service.flatNote}</p>
      )}

      <Link href="/contact" className="cta-primary btn">
        Get Your Free Quote
      </Link>
    </div>
  );
}
