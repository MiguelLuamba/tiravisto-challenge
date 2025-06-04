import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { MostLookingForCard } from "@/components/most-looking-for-card";

export function MostPopularDestenies() {
  return (
    <section className="destinos-section relative w-full h-max py-21 grid place-items-center">
      <section className="w-full h-[423px] bg-[url('/images/desteny-pattern.png')] bg-center bg-cover absolute top-0 left-0" />
      <div className="flex flex-col w-max items-center mb-[60px]">
        <Badge text="Top Destinos" />
        <h1 className="uppercase font-medium text-[1.7em] lg:text-[3em] leading-[120%] mt-2 mb-3">
          Destinos mais procurados
        </h1>
        <p className="text-center text-sm lg:text-base text-muted-foreground mb-10">
          Confira os destinos mais procurados por nossos clientes nos últimos meses, <br />qual seria o seu novo destino?
        </p>
        <Button type="DEFAULT">
          <p>Conheça mais</p>
        </Button>
      </div>
      <figure className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        <MostLookingForCard image="/images/indonesia.svg" type="DEFAULT" place="Bali, Indonesia"/>
        <MostLookingForCard image="/images/eua.svg" type="MIDDLE" place="Nova York, Estados Unidos"/>
        <MostLookingForCard image="/images/franca.svg" type="DEFAULT" place="Paris, França"/>
        <MostLookingForCard image="/images/grecia.svg" type="DEFAULT" place="Santorini, Grecia"/>
        <MostLookingForCard image="/images/south-africa.svg" type="MIDDLE" place="Cidade do Cabo, Africa do Sul"/>
        <MostLookingForCard image="/images/india.svg" type="DEFAULT" place="Mumbai, India"/>
      </figure>
    </section>
  )
}