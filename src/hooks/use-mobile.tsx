
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Create a media query list
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Function to handle viewport changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Modern event listener for matchMedia
    if (mql.addEventListener) {
      mql.addEventListener("change", handleResize)
    } else {
      // Fallback for older browsers
      window.addEventListener("resize", handleResize)
    }
    
    return () => {
      // Clean up event listeners
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleResize)
      } else {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return !!isMobile
}
