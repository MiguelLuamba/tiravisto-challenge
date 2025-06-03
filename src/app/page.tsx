import Image from "next/image";
import { Add, ArrowRight } from "iconsax-react";
import { Badge } from "../components/badge";
// width 1680
// widthheight 970
export default function Home() {
  return (
    <main>
      <section className="flex items-start justify-between min-h-max pr-5 py-5 pl-[60px]">
        <div className="w-1/2">
          <nav className="flex items-center gap-1.5 pr-[60px] py-8">
            <Image src={"/images/logo.svg"} width={152} height={42} alt="logo"/>
            <ul className="flex items-center gap-1 font-inter font-normal text-foreground">
              <li className="font-bold mx-3 my-2.5">Home</li>
              <li className="mx-3 my-2.5">Quem Somos</li>
              <li className="mx-3 my-2.5">Serviços</li>
              <li className="mx-3 my-2.5">Contato</li>
            </ul>
          </nav>


          <article className="w-full pr-[60px] flex flex-col gap-8">
            <p className="font-medium font-inter text-[4.5em] leading-[120.8%] tracking-[-7%]">
              Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
            </p>

            <div className="flex w-full bg-border h-[1.5px]"/>

            <div className="flex flex-col w-full items-center gap-9">
              <article className="flex w-full gap-5">

                <div className="space-y-10">
                  <p className="text-muted-foreground text-[1.4em] font-normal font-inter tracking-[-2%]">
                    Com uma equipe altamente treinada, nós 
                    temos todos os procedimentos para que seu 
                    processo seja o mais tranquilo e rápido. 
                    Uma consultoria completa para você e sua 
                    família não ter nenhuma preocupação na sua 
                    viagem.
                  </p>
                  <button className="px-6 py-4 bg-secondary-900 gap-3 flex items-center justify-between font-semibold text-white rounded-full">
                    Saiba mais <ArrowRight size={24} color="#FFF"/>
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-4 h-max">
                  <figure className="w-3xs h-36 rounded-2xl relative">
                    <Image src={"/images/video-thumbnail.svg"} fill alt="video thumbnail" objectFit="cover" className="object-cover"/>
                  </figure>
                  <div className="flex items-center justify-between">
                    <article className="">
                      <p className="font-semibold text-[1.4em] text-foreground">Conheça a Bruna</p>
                      <p className="text-[1.1em] text-muted-foreground font-normal">Ver vídeo</p>
                    </article>
                    <button type="button" className="size-9 rounded-full bg-secondary-900 grid place-items-center">
                      <ArrowRight size={24} color="#FFF"/>
                    </button>
                  </div>
                </div>

              </article>
              <article className="flex gap-11 w-full">
                <div className=" border-r pr-24 border-border">
                  <p className="text-[44px] font-medium text-foreground tracking-[-5%]">509</p>
                  <p className="text-muted-foreground tracking-[-5%] font-normal font-inter text-base">Vistos Tirados</p>
                </div>
                <div className=" border-r pr-24 border-border">
                  <p className="text-[44px] font-medium text-foreground tracking-[-5%]">509</p>
                  <p className="text-muted-foreground tracking-[-5%] font-normal font-inter text-base">Vistos Tirados</p>
                </div>
                <div className="">
                  <p className="text-[44px] font-medium text-foreground tracking-[-5%]">509</p>
                  <p className="text-muted-foreground tracking-[-5%] font-normal font-inter text-base">Vistos Tirados</p>
                </div>
              </article>

            </div>
          </article>

        </div>
        <div className="w-1/2 h-screen rounded-3xl relative overflow-hidden ">
          <Image src={"/images/dream-travel.svg"} fill alt="image" objectFit="cover"/>
          <div className="flex-1 h-full flex flex-col items-end justify-between relative">
            <Badge text="Tirar seu visto agora!" styles={{margin:16}}/>

            <div className="flex flex-col w-full text-white px-10 pb-9 space-y-3" id="dream-box-article">
              <p className="font-semibold text-[44px] leading-[120%] font-inter tracking-[-2%]">Realize o seu sonho com <br />a ajuda da Tirar Visto!</p>
              <p className="text-base font-normal font-inter tracking-[-2%]">Com um serviço profissional, você não terá dor de cabeça para todo o <br />
              processo do visto e entrevistas no consulado.</p>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-muted-background px-[60px] py-14">
        <p className="uppercase font-medium text-[4.3em]">Consultoria completa para <br />tirar seu visto</p>
        <p className="uppercase text-right font-medium text-[4.3em] italic">você esta em boas mãos!</p>

      </section>

      <section className="px-[60px] py-[95px] bg-background flex flex-col gap-[60px]">
        <div className="flex items-center justify-between gap-16">
          <article className="w-max shrink-0 flex flex-col gap-3 items-start justify-">
            <Badge text="Veja como funciona"/>
            <p className="uppercase font-medium text-[4em] leading-[120%]">Sua tranquilidade <br />não tem preço!</p>
          </article>
          <p className="flex-1 text-base text-muted-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>


        <div className="flex items-start gap-9">
          <div className="w-1/2">
            <figure className="relative w-full h-[444px] overflow-hidden rounded-[26px]">
              <Image src={"/images/family-traveling.png"} fill alt="family" className="object-fill"/>
            </figure>
          
          </div>
          <article className="flex-1 flex flex-col">
            <div>
              <h1 className="text-[44px] font-medium leading-[130.8%] tracking-[-8%]">Etapa Inicial</h1>
              <p className="flex-1 text-base text-muted-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div>
              <h3 className="text-[44px] font-medium leading-[130.8%] tracking-[-8%]">Processo de Entrevista</h3>
              <p className="flex items-center gap-2 text-foreground text-base font-medium"><Add size={20} color="#232323"/> Leia mais</p>
            </div>

            <div>
              <h3 className="text-[44px] font-medium leading-[130.8%] tracking-[-8%]">Processo de Entrevista</h3>
              <p className="flex items-center gap-2 text-foreground text-base font-medium"><Add size={20} color="#232323"/> Leia mais</p>
            </div>

          </article>
        </div>
      </section>
    </main>
  );
}


