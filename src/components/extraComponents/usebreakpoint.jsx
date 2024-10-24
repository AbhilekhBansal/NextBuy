import { useState, useEffect } from "react";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  // Helper function to get the current screen size
  function getBreakpoint() {
    const width = window.innerWidth;

    if (width < 640) {
      return "s"; // Small screens (mobile)
    } else if (width >= 640 && width < 768) {
      return "m"; // Medium screens (tablet)
    } else if (width >= 768 && width < 1024) {
      return "ml"; // Large screens (laptop)
    } else if (width >= 1024 && width < 1280) {
      return "l"; // Extra large screens (desktop)
    } else {
      return "l"; // 2xl screens and larger
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
}

export default useBreakpoint;
