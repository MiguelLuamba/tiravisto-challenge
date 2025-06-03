import { CSSProperties } from "react"

interface HorizontalLineProps {
  styles?: CSSProperties
}
export function HorizontalLine({styles}:HorizontalLineProps) {
  return <div style={styles} className="flex w-full bg-border h-[1.5px]"/>
}