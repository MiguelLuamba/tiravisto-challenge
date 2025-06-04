import { CallCalling, Clock } from "iconsax-react";

export function ConsultoriaSection() {
  return(
    <section className="consultoria-section bg-muted-background px-4 md:px-[60px] py-10 relative">
      <div className="bg-white w-max rounded-xl p-2.5 absolute bottom-3 left-20 md:left-42 md:bottom-5 xl:bottom-12 xl:left-96 -rotate-12">
        <Clock size={40} color="#232323" className="size-5 md:size-5 lg:size-8 xl:size-10" />
      </div>
      <div className="bg-white w-max rounded-xl p-4 absolute top-3 right-20 md:right-42 md:top-5 xl:top-12 xl:right-96 rotate-12">
        <CallCalling size={40} color="#232323" className="size-5 md:size-5 lg:size-8 xl:size-10" />
      </div>
      <p className="consultoria-text-left uppercase font-medium text-2xl sm:text-[1.3em] lg:text-[2em] xl:text-[3.5em]">
        Consultoria completa para <br />tirar seu visto
      </p>
      <p className="consultoria-text-right uppercase text-right font-medium text-2xl sm:text-[1.3em] lg:text-[2em] xl:text-[3.5em] italic">
        você esta em boas mãos!
      </p>
    </section>
  )
}