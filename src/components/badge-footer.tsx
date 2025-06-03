import { ReactNode } from "react";

export function FooterBadge({ children }:{children: ReactNode}) {
  return (
    <div className="px-5 py-2.5 border rounded-full border-foreground text-foreground w-max font-semibold text-xl">
      {children}
    </div>
  )
}