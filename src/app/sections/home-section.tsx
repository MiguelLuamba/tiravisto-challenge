import Image from "next/image";
import { ArrowRight } from "iconsax-react";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { HorizontalLine } from "@/components/line";

export function HomeSection() {
  return (
    <section className="hero-section flex xl:flex-row flex-col items-start justify-between min-h-max pr-5 py-5 lg:pl-[60px] sm:pl-7 pl-4">
      <div className="xl:w-1/2 w-full">
        <nav className="flex items-center justify-between gap-1.5 lg:pr-[60px] sm:pr-7 pr-4 py-8">
          <Image src="/images/logo.svg" width={152} height={42} alt="logo" priority />
          <ul className="flex items-center gap-1 font-inter font-normal text-foreground">
            <li className="font-bold mx-3 my-2.5">Home</li>
            <li className="mx-3 my-2.5 text-nowrap">Quem Somos</li>
            <li className="mx-3 my-2.5">Serviços</li>
            <li className="mx-3 my-2.5">Contato</li>
          </ul>
        </nav>

        <article className="w-full lg:pr-[60px] sm:pr-7 pr-4 flex flex-col gap-8">
          <p className="hero-text font-medium font-inter 2xl:text-[4.5em] xl:text-[3.6em] md:text-[3.3em] sm:text-[3em] text-[2em] leading-[120.8%] tracking-[-7%]">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </p>

          <HorizontalLine />

          <div className="flex flex-col w-full items-center gap-9">
            <article className="flex flex-col w-full gap-5 md:flex-row sm:gap-2">
              <div className="md:space-y-10 space-y-4">
                <p className="text-muted-foreground 2xl:text-[1.4em] sm:text-[1em] text-[0.9em] xl:w-full lg:w-2/3 font-normal font-inter tracking-[-2%]">
                  Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido. Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.
                </p>
                <Button type="DEFAULT">
                  Saiba mais <ArrowRight size={24} color="#FFF" />
                </Button>
              </div>

              <div className="mt-8 flex flex-col gap-4 h-max">
                <figure className="md:w-3xs md:h-36 rounded-2xl relative w-full h-48 overflow-hidden">
                  <Image src="/images/video-thumbnail.svg" fill alt="video thumbnail" className="object-cover" priority />
                </figure>
                <div className="flex items-center justify-between">
                  <article>
                    <p className="font-semibold 2xl:text-[1.4em] text-foreground">Conheça a Bruna</p>
                    <p className="text-[1.1em] text-muted-foreground font-normal">Ver vídeo</p>
                  </article>
                  <Button type="CIRCULAR_FILL">
                    <ArrowRight size={24} color="#FFF" />
                  </Button>
                </div>
              </div>
            </article>
            <article className="flex xl:gap-11 w-full items-center justify-around mb-10 lg:mb-0">
              <div className="space-y-2 border-r 2xl:pr-24 pr-14 border-border">
                <p className="text-[44px] font-medium text-foreground tracking-[-5%]">509</p>
                <p className="text-muted-foreground tracking-[-5%] font-normal font-inter text-base">Vistos Tirados</p>
              </div>
              <div className="space-y-2 border-r 2xl:pr-24 pr-14 border-border">
                <p className="text-[44px] font-medium text-foreground tracking-[-5%]">602</p>
                <p className="text-muted-foreground tracking-[-5%] font-normal font-inter text-base">Passaportes Tirados</p>
              </div>
              <div className="space-y-2">
                <p className="text-[44px] font-medium text-foreground tracking-[-5%]">634</p>
                <p className="text-muted-foreground tracking-[-5%] font-normal font-inter text-base">Famílias Felizes</p>
              </div>
            </article>
          </div>
        </article>
      </div>
      <div className="hero-image xl:w-1/2 w-full h-[600px] lg:h-screen rounded-3xl relative overflow-hidden">
        <Image src="/images/dream-travel.svg" fill alt="image" className="object-cover" priority />
        <div className="flex-1 h-full flex flex-col items-end justify-between relative">
          <Badge text="Tirar seu visto agora!" styles={{ margin: 16 }} />
          <div className="flex flex-col w-full text-white md:px-10 px-6 pb-9 space-y-3" id="dream-box-article">
            <p className="font-semibold md:text-[44px] text-4xl leading-[120%] font-inter tracking-[-2%]">
              Realize o seu sonho com <br />a ajuda da Tirar Visto!
            </p>
            <p className="md:text-base text-sm font-normal font-inter tracking-[-2%]">
              Com um serviço profissional, você não terá dor de cabeça para todo o <br />processo do visto e entrevistas no consulado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}