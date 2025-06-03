import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode
  type: "CIRCULAR_FILL" | "DEFAULT" | "CIRCULAR_BORDER" 
}
export function Button({children, type}: ButtonProps) {
  return (
    <button className={`
      ${type === "DEFAULT" && "px-6 py-4 justify-between bg-secondary-900"} 
      ${type === "CIRCULAR_BORDER" && "p-2.5 size-12 justify-center border-[1.5px] border-secondary-900 bg-background"}
      ${type === "CIRCULAR_FILL" && "p-2.5 size-12 justify-center bg-secondary-900"}
      gap-3 flex items-center  font-semibold text-white rounded-full`
      }
    >
      {children}
    </button>
  )
}