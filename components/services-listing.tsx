import { ServicesGrid } from "@/components/services-grid";
import { ServicesSlider } from "@/components/services-slider";

export function ServicesListing() {
  return (
    <>
      <div className="md:hidden">
        <ServicesSlider />
      </div>
      <ServicesGrid />
    </>
  );
}
