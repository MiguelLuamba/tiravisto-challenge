import { FooterBadge } from "@/components/badge-footer";
import { Button } from "@/components/button";
import { FooterListItems } from "@/components/footer-list-itens";
import { ArrowUp } from "iconsax-react";

export function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="lg:px-[60px] px-6 py-[70px] border-b border-border space-y-10">
        <div className="flex flex-col xl:flex-row xl:items-center items-start justify-between gap-10 xl:gap-0">
          <article>
            <h1 className="font-medium sm:text-[3em] lg:text-[3.8em] xl:text-[4.3em] text-[2.3em] text-foreground tracking-[-8%] leading-[130.8%]">
              Está com alguma <br />dúvida?
            </h1>
            <p className="text-muted-foreground text-base lg:text-xl text-left mt-3 mb-6">
              Entre em contato através do nosso canal direto ao cliente <br />através do botão abaixo
            </p>
            <Button type="DEFAULT">
              <p>Central de Atendimento</p>
            </Button>
          </article>
          <div className="border-b border-foreground flex w-full xl:w-max items-center justify-between gap-32">
            <p className="md:text-[44px] text-4xl tracking-[-6%] font-normal">Receba novidades</p>
            <ArrowUp size={40} color="#232323" className="rotate-45" />
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
            <FooterListItems title="Empresa" items={["Home", "Quem somos", "Serviços", "Contato"]}/>
            <FooterListItems title="Novidades" items={["Passaporte", "Visto", "Entrevista", "Polícia Federal"]}/>
            <FooterListItems title="Suporte" items={["FAQ", "Contato", "Dúvidas Frequentes"]}/>
          </div>
        </div>
      </section>
      <div className="grid place-items-center px-[60px] py-7">
        <p className="font-medium text-base">© 2025 Tirar Visto - Todos os Direitos Reservados</p>
      </div>
    </footer>
  )
}