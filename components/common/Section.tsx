import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("px-12 md:py-24 lg:py-15", className)}
      {...props}
    >
      {children}
    </section>
  )
}
