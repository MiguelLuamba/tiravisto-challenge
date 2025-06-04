import Image from "next/image";
import { Add, ArrowLeft, ArrowRight, ArrowUp, CallCalling, Clock } from "iconsax-react";
import { Badge } from "../components/badge";
import { HorizontalLine } from "../components/line";
import { Button } from "../components/button";
import { MostLookingForCard } from "../components/most-looking-for-card";
import { PackageCard } from "../components/package-card";
import { FooterBadge } from "../components/badge-footer";
import { FooterListItems } from "../components/footer-list-itens";

export default function Home() {
  return (
    <main>
      <section className="flex xl:flex-row flex-col items-start justify-between min-h-max pr-5 py-5 lg:pl-[60px] sm:pl-7 pl-4">
        <div className="xl:w-1/2 w-full">
          <nav className="flex items-center justify-between gap-1.5 lg:pr-[60px] sm:pr-7 pr-4 py-8">
            <Image src={"/images/logo.svg"} width={152} height={42} alt="logo" priority/>
            <ul className="flex items-center gap-1 font-inter font-normal text-foreground">
              <li className="font-bold mx-3 my-2.5">Home</li>
              <li className="mx-3 my-2.5 text-nowrap">Quem Somos</li>
              <li className="mx-3 my-2.5">Serviços</li>
              <li className="mx-3 my-2.5">Contato</li>
            </ul>
          </nav>

          <article className="w-full lg:pr-[60px] sm:pr-7 pr-4 flex flex-col gap-8">
            <p className="font-medium font-inter 2xl:text-[4.5em] xl:text-[3.6em] md:text-[3.3em] sm:text-[3em] text-[2em] leading-[120.8%] tracking-[-7%]">
              Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
            </p>

            <HorizontalLine/>

            <div className="flex flex-col w-full items-center gap-9">
              <article className="flex flex-col w-full gap-5 md:flex-row sm:gap-2">

                <div className="md:space-y-10 space-y-4">
                  <p className="text-muted-foreground 2xl:text-[1.4em] sm:text-[1em] text-[0.9em] xl:w-full lg:w-2/3 font-normal font-inter tracking-[-2%]">
                    Com uma equipe altamente treinada, nós 
                    temos todos os procedimentos para que seu 
                    processo seja o mais tranquilo e rápido. 
                    Uma consultoria completa para você e sua 
                    família não ter nenhuma preocupação na sua 
                    viagem.
                  </p>
                  <Button type="DEFAULT">
                    Saiba mais <ArrowRight size={24} color="#FFF"/>
                  </Button>
                </div>

                <div className="mt-8 flex flex-col gap-4 h-max">
                  <figure className="md:w-3xs md:h-36 rounded-2xl relative w-full h-48 overflow-hidden">
                    <Image src={"/images/video-thumbnail.svg"} fill alt="video thumbnail" objectFit="cover" className="object-cover" priority/>
                  </figure>
                  <div className="flex items-center justify-between">
                    <article className="">
                      <p className="font-semibold 2xl:text-[1.4em] text-foreground">Conheça a Bruna</p>
                      <p className="text-[1.1em] text-muted-foreground font-normal">Ver vídeo</p>
                    </article>
                    <Button type="CIRCULAR_FILL">
                      <ArrowRight size={24} color="#FFF"/>
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
        <div className="xl:w-1/2 w-full h-[600px] lg:h-screen rounded-3xl relative overflow-hidden ">
          <Image src={"/images/dream-travel.svg"} fill alt="image" objectFit="cover" priority/>
          <div className="flex-1 h-full flex flex-col items-end justify-between relative">
            <Badge text="Tirar seu visto agora!" styles={{margin:16}}/>

            <div className="flex flex-col w-full text-white md:px-10 px-6 pb-9 space-y-3" id="dream-box-article">
              <p className="font-semibold md:text-[44px] text-4xl leading-[120%] font-inter tracking-[-2%]">Realize o seu sonho com <br />a ajuda da Tirar Visto!</p>
              <p className="md:text-base text-sm font-normal font-inter tracking-[-2%]">Com um serviço profissional, você não terá dor de cabeça para todo o <br />
              processo do visto e entrevistas no consulado.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-muted-background px-4 md:px-[60px] py-10 relative">
        <div className="bg-white w-max rounded-xl p-2.5 absolute bottom-3 left-20 md:left-42 md:bottom-5 xl:bottom-12 xl:left-96 -rotate-12">
          <Clock size={40} color="#232323" className="size-5 md:size-5 lg:size-8 xl:size-10"/>
        </div>
        <div className="bg-white w-max rounded-xl p-4 absolute top-3 right-20 md:right-42 md:top-5 xl:top-12 xl:right-96 rotate-12">
          <CallCalling size={40} color="#232323" className="size-5 md:size-5 lg:size-8 xl:size-10"/>
        </div>
        <p className="uppercase font-medium text-2xl sm:text-[1.3em] lg:text-[2em] xl:text-[3.5em]">Consultoria completa para <br />tirar seu visto</p>
        <p className="uppercase text-right font-medium text-2xl sm:text-[1.3em] lg:text-[2em] xl:text-[3.5em] italic">você esta em boas mãos!</p>
      </section>

      <section className="px-4 lg:px-[60px] py-[95px] bg-background flex flex-col gap-[60px]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-16 gap-4">
          <article className="w-max shrink-0 flex flex-col gap-3 items-start ">
            <Badge text="Veja como funciona"/>
            <p className="uppercase font-mediumtext-base sm:text-[3em] lg:text-[3.8em] xl:text-[4.5em] text-[2.3em] leading-[120%]">Sua tranquilidade <br />não tem preço!</p>
          </article>
          <p className="flex-1 text-sm md:text-base text-muted-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>


        <div className="flex flex-col lg:flex-row items-start gap-9">
          <div className="w-full lg:w-1/2">
            <figure className="relative w-full md:h-[444px] h-[250px] overflow-hidden rounded-[26px]">
              <Image src={"/images/family-traveling.png"} fill alt="family" className="object-fill" priority/>
            </figure>
          
          </div>
          <article className="flex-1 flex flex-col">
            <div className="border-b border-border px-3 py-5 space-y-4">
              <h1 className="md:text-[44px] text-3xl font-medium leading-[130.8%] tracking-[-8%]">Etapa Inicial</h1>
              <p className="flex-1 text-base text-muted-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>


            <div className="border-b border-border px-3 py-5 space-y-4">
              <h3 className="md:text-[44px] text-3xl font-medium leading-[130.8%] tracking-[-8%]">Processo de Entrevista</h3>
              <p className="flex items-center gap-2 text-foreground text-base font-medium"><Add size={20} color="#232323"/> Leia mais</p>
            </div>


            <div className="border-b border-border px-3 py-5 space-y-4">
              <h3 className="md:text-[44px] text-3xl font-medium leading-[130.8%] tracking-[-8%]">Processo de Entrevista</h3>
              <p className="flex items-center gap-2 text-foreground text-base font-medium"><Add size={20} color="#232323"/> Leia mais</p>
            </div>



          </article>
        </div>
      </section>


      <section className="relative w-full h-max py-21 grid place-items-center">
        <section className="w-full h-[423px] bg-[url('/images/desteny-pattern.png')] bg-center bg-cover absolute top-0 left-0"/>

        <div className="flex flex-col w-max items-center mb-[60px]">
          <Badge text="Top Destinos" />
          <h1 className="uppercase font-medium text-[1.7em] lg:text-[3em] leading-[120%] mt-2 mb-3">Destinos mais procurados </h1>
          <p className="text-center text-sm lg:text-base text-muted-foreground mb-10">Confira os destinos mais procurados por nossos clientes nos últimos meses, <br />qual seria o seu novo destino?</p>
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

      <section className="flex flex-col px-4 lg:px-[60px] py-[74px] bg-background gap-[60px]">

        <aside className="flex items-start lg:items-end justify-between">
          <div>
            <Badge text="Pacotes"/>
            <h1 className="sm:text-[3em] lg:text-[3.8em] xl:text-[4em] text-[2.3em] leading-[120%] tracking-[-8%] text-nowrap">Confira nossos pacotes</h1>
          </div>
          <div className="flex items-center gap-5">
            <Button type="CIRCULAR_BORDER">
              <ArrowLeft size={24} color="#1B2543"/>
            </Button>
            <Button type="CIRCULAR_FILL">
              <ArrowRight size={24} color="#FFFFFF"/>
            </Button>
          </div>

        </aside>


        <aside className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">

          <PackageCard package_type="Passaporte" image="/images/passaporte.svg" callForm="On-line" duration="45 dias" price="890,00"/>
          <PackageCard package_type="Passaporte + Visto" image="/images/passaporte + visto.svg" callForm="On-line + Presencial" duration="25 dias" price="1.290,00"/>
          <PackageCard package_type="Consultoria Completa" image="/images/consultoria-completa.svg" callForm="Presencial Completo" duration="10 dias" price="1.890,00"/>

        </aside>
      </section>

      <footer className="flex flex-col">

        <section className="lg:px-[60px] px-6 py-[70px] border-b border-border space-y-10">
          <div className="flex flex-col xl:flex-row xl:items-center items-start justify-between gap-10 xl:gap-0">
            <article>
              <h1 className="font-medium sm:text-[3em] lg:text-[3.8em] xl:text-[4.3em] text-[2.3em] text-foreground tracking-[-8%] leading-[130.8%]">Está com alguma <br />dúvida?</h1>
              <p className="text-muted-foreground text-base lg:text-xl text-left mt-3 mb-6">Entre em contato através do nosso canal direto ao cliente <br />através do botão abaixo</p>
              <Button type="DEFAULT">
                <p>Central de Atendimento</p>
              </Button>
            </article>

            <div className="border-b border-foreground flex w-full xl:w-max items-center justify-between gap-32">
              <p className="md:text-[44px] text-4xl tracking-[-6%] font-normal">Receba novidades</p>
              <ArrowUp size={40} color="#232323" className="rotate-45"/>
            </div>
          </div>


          <div className="flex flex-col items-start w-full lg:flex-row lg:items-end lg:justify-between">
            <article className="space-y-5 w-full lg:w-max">
              <p className="text-2xl text-foreground font-semibold tracking-[-2%]">Siga em nossas redes:</p>
              <div className="flex gap-5 justify-evenly">
                <FooterBadge>
                  <p>Instagram</p>
                </FooterBadge>
                <FooterBadge>
                  <p>X</p>
                </FooterBadge>
                <FooterBadge>
                  <p>Facebook</p>
                </FooterBadge>
                <FooterBadge>
                  <p>Youtube</p>
                </FooterBadge>
              </div>
            </article>

            <div className="w-full lg:w-max flex justify-between gap-32 mt-7 lg:mt-0">
              <FooterListItems
                title="Empresa"
                items={["Home", "Quem somos", "Serviços", "Contato"]}
              />
              <FooterListItems
                title="Novidades"
                items={["Passaporte", "Visto", "Entrevista", "Polícia Federal"]}
              />
              <FooterListItems
                title="Suporte"
                items={["FAQ", "Contato", "Dúvidas Frequentes"]}
              />
            </div>
          </div>

        </section>

        <div className="grid place-items-center px-[60px] py-7">
          <p className="font-medium text-base">© 2025 Tirar Visto - Todos os Direitos Reservados</p>
        </div>

      </footer>
    </main>
  );
}


