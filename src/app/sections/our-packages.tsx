import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { PackageCard } from "@/components/package-card";

export function OurPackages() {
  return (
    <section className="pacotes-section flex flex-col px-4 lg:px-[60px] py-[74px] bg-background gap-[60px]">
      <aside className="flex items-start lg:items-end justify-between">
        <div>
          <Badge text="Pacotes" />
          <h1 className="sm:text-[3em] lg:text-[3.8em] xl:text-[4em] text-[2.3em] leading-[120%] tracking-[-8%] text-nowrap">
            Confira nossos pacotes
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <Button type="CIRCULAR_BORDER">
            <ArrowLeft size={24} color="#1B2543" />
          </Button>
          <Button type="CIRCULAR_FILL">
            <ArrowRight size={24} color="#FFFFFF" />
          </Button>
        </div>
      </aside>
      <aside className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
        <PackageCard package_type="Passaporte" image="/images/passaporte.svg" callForm="On-line" duration="45 dias" price="890,00" />
        <PackageCard package_type="Passaporte + Visto" image="/images/passaporte + visto.svg" callForm="On-line + Presencial" duration="25 dias" price="1.290,00" />
        <PackageCard package_type="Consultoria Completa" image="/images/consultoria-completa.svg" callForm="Presencial Completo" duration="10 dias" price="1.890,00" />
      </aside>
    </section>
  )
}