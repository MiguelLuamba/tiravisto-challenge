import { CSSProperties, ReactNode } from "react";


interface BadgeProps {
  text: string,
  styles?: CSSProperties
}
export function Badge({text, styles}: BadgeProps) {
  return (
    <div style={styles} className="py-3 px-4 bg-primary-900 text-base font-semibold text-secondary-800 rounded-full">
      {text}
    </div>
  )
}