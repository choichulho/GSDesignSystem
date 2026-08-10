import * as React from "react";

export const IconSubtractAltFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2m4.25 10.75h-8.5a.749.749 0 1 1 0-1.5h8.5a.749.749 0 1 1 0 1.5"/>
  </svg>
));

IconSubtractAltFill.displayName = "IconSubtractAltFill";
