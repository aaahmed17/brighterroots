import { services } from "@/lib/services-data";
import { ServiceCard } from "@/components/service-card";

export function ServicesGrid() {
  return (
    <div
      className="hidden gap-6 md:grid [grid-template-columns:repeat(auto-fill,minmax(min(100%,16rem),1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(min(100%,18rem),1fr))] xl:[grid-template-columns:repeat(auto-fill,minmax(min(100%,20rem),1fr))]"
      aria-label="All services"
    >
      {services.map((service) => (
        <ServiceCard key={service.number} service={service} />
      ))}
    </div>
  );
}
