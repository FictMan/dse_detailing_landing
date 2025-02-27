'use client';

import { FooterComponent } from "../../shared/components/footer.component";
import { HeaderComponent } from "../../shared/components/header.component";
import { MapComponent } from "../../shared/components/map.component";
import { ServicesComponent } from "../../shared/components/services.component";
import { SliderComponent } from "../../shared/components/slider.component";

export default function Home() {
  return (
    <div className="flex items-center flex-col m-auto font-[family-name:var(--font-unbounded)] gap-20">
      <div className="max-w-7xl w-full sm:p-10 mb-20">
        <HeaderComponent />
      </div>

      <div className="w-full max-w-7xl sm:p-10">
        <ServicesComponent />
      </div>

      <SliderComponent />

      <div className="w-full max-w-7xl sm:p-10">
        <MapComponent />
      </div>

      <FooterComponent />
    </div>
  );
}
