import { cn } from "@/lib/utils"

export const Chip: React.FC<{
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLDivElement>["className"]
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "rounded-full border bg-muted-foreground/8 px-2 py-1 text-xs text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}
