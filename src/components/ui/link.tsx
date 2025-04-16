import * as React from "react"
import { Link as RouterLink } from "react-router-dom"
import { cn } from "@/lib/utils"

interface LinkProps extends React.ComponentPropsWithoutRef<typeof RouterLink> {
  children: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <RouterLink
        ref={ref}
        className={cn(
          "text-primary hover:text-primary/80 transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </RouterLink>
    )
  }
)
Link.displayName = "Link"

export { Link } 