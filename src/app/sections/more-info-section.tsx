import Image from "next/image";
import { Add } from "iconsax-react";
import { Badge } from "@/components/badge";

export function MoreInfoSection() {
  return (
    <section className="tranquilidade-section px-4 lg:px-[60px] py-[95px] bg-background flex flex-col gap-[60px]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-16 gap-4">
        <article className="w-max shrink-0 flex flex-col gap-3 items-start">
          <Badge text="Veja como funciona" />
          <p className="tranquilidade-title uppercase font-medium text-base sm:text-[3em] lg:text-[3.8em] xl:text-[4.5em] text-[2.3em] leading-[120%]">
            Sua tranquilidade <br />não tem preço!
          </p>
        </article>
        <p className="tranquilidade-text flex-1 text-sm md:text-base text-muted-foreground">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-9">
        <div className="w-full lg:w-1/2">
          <figure className="tranquilidade-image relative w-full md:h-[444px] h-[250px] overflow-hidden rounded-[26px]">
            <Image src="/images/family-traveling.png" fill alt="family" className="object-fill" priority />
          </figure>
        </div>
        <article className="flex-1 flex flex-col">
          <div className="border-b border-border px-3 py-5 space-y-4">
            <h1 className="md:text-[44px] text-3xl font-medium leading-[130.8%] tracking-[-8%]">Etapa Inicial</h1>
            <p className="flex-1 text-base text-muted-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="border-b border-border px-3 py-5 space-y-4">
            <h3 className="md:text-[44px] text-3xl font-medium leading-[130.8%] tracking-[-8%]">Processo de Entrevista</h3>
            <p className="flex items-center gap-2 text-foreground text-base font-medium">
              <Add size={20} color="#232323" /> Leia mais
            </p>
          </div>
          <div className="border-b border-border px-3 py-5 space-y-4">
            <h3 className="md:text-[44px] text-3xl font-medium leading-[130.8%] tracking-[-8%]">Entrega de Documentos</h3>
            <p className="flex items-center gap-2 text-foreground text-base font-medium">
              <Add size={20} color="#232323" /> Leia mais
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}