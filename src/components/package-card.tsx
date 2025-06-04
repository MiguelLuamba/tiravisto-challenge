import Image from "next/image";
import { Button } from "./button";
import { HorizontalLine } from "./line";


interface PackageCardProps {
  price: string,
  image: string
  duration: string,
  package_type: string,
  callForm: string
}
export function PackageCard({
  callForm,
  duration,
  image,
  package_type,
  price
}: PackageCardProps) {
  return (
    <div className="grow p-4 rounded-3xl border border-border flex flex-col gap-8">

      <figure className="bg-border rounded-2xl overflow-hidden relative h-[250px] sm:h-[390px] w-full">
        <Image src={image} fill objectFit="cover" alt="image"/>
      </figure>

      <div>
        <div className="flex gap-4 mb-5">
          <button type="button" className="rounded-full px-5 py-1.5 border border-secondary-900 text-base">
            <p>Basic</p>
          </button>
          <button type="button" className="rounded-full px-5 py-1.5 border border-muted-foreground text-base text-muted-foreground">
            <p>Premium</p>
          </button>
        </div>

        
        <article className="space-y-4">
          <h1 className="text-xl lg:text-3xl text-black font-semibold">{package_type}</h1>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-foreground text-xl font-normal">Atendimento</p>
              <p className="text-muted-foreground font-normal">{callForm}</p>
            </div>
            
            <div>
              <p className="text-foreground text-xl font-normal">Tempo</p>
              <p className="text-muted-foreground font-normal">{duration}</p>
            </div>

          </div>
        </article>

        <HorizontalLine styles={{marginTop:20, marginBottom: 20}}/>

        <div className="flex justify-between items-center">
          <article>
            <p className="text-muted-foreground font-normal">A partir de</p>
            <h2 className="text-2xl lg:text-4xl text-black font-semibold">R$ {price}</h2>
          </article>
          <Button type="DEFAULT">
            <p>Contratar</p>
          </Button>
        </div>
      </div>
    </div>
  )
}