import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteLayout from "../../components/SiteLayout";
import PageHeader from "../../components/PageHeader";
import CTABanner from "../../components/CTABanner";
import { areas, getArea } from "../../data/areas";
import { services } from "../../data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return { title: "Area Not Found" };

  return {
    title: `Cleaning Services in ${area.name} | HomeGlow Property Care`,
    description: area.description,
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <SiteLayout>
      <PageHeader
        title={`Cleaning Services in ${area.name}`}
        subtitle={`Professional domestic, office and deep cleaning in ${area.name} and nearby.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas", href: "/areas" },
          { label: area.name },
        ]}
      />

      <section className="inner-page">
        <div className="container">
          <div className="detail-content detail-content--wide">
            <p>{area.description}</p>

            <h2>Neighbourhoods We Serve</h2>
            <div className="tag-list">
              {area.highlights.map((h) => (
                <span className="tag" key={h}>
                  {h}
                </span>
              ))}
            </div>

            <h2>Services Available in {area.name}</h2>
            <ul className="link-list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="cta-primary btn">
              Get a Free Quote in {area.name}
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
