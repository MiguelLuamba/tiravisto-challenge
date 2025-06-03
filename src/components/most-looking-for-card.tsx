import Image from "next/image";

interface MostLookingForCardProps {
  image: string;
  place: string;
  type: "DEFAULT" | "MIDDLE";
}

export function MostLookingForCard({
  type,
  image,
  place,
}: MostLookingForCardProps) {
  return (
    <div
      className={`
        ${type === "DEFAULT" ? "w-[330px] h-72" : "size-[340px]"}
        rounded-3xl relative overflow-hidden flex items-end justify-center pb-4 group
      `}
    >
      <Image
        src={image}
        fill
        alt={place}
        priority
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />

      <p className="px-4 py-2.5 w-max text-white" id="place-label">
        {place}
      </p>
    </div>
  );
}