import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode
  type: "CIRCULAR_FILL" | "DEFAULT" | "CIRCULAR_BORDER" 
}
export function Button({children, type}: ButtonProps) {
  return (
    <button className={`
      ${type === "DEFAULT" && "2xl:px-6 2xl:py-4 px-5 py-2.5 justify-between bg-secondary-900"} 
      ${type === "CIRCULAR_BORDER" && "p-2.5 xl:size-14 justify-center border-[1.5px] border-secondary-900 bg-background"}
      ${type === "CIRCULAR_FILL" && "p-2.5 xl:size-14 justify-center bg-secondary-900"}
      gap-3 flex items-center  font-semibold text-white rounded-full`
      }
    >
      {children}
    </button>
  )
}