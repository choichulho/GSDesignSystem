import * as React from "react";

export const IconCalculateFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17.75 9h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5m0 6h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5m0 3h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5m-7.5-9H9v1.25a.75.75 0 0 1-1.5 0V9H6.25a.75.75 0 0 1 0-1.5H7.5V6.25a.75.75 0 0 1 1.5 0V7.5h1.25a.75.75 0 0 1 0 1.5m.032 7.72a.751.751 0 0 1-1.061 1.06l-.971-.971-.971.971a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l.971-.971-.971-.972a.751.751 0 0 1 1.061-1.06l.971.97.971-.97a.75.75 0 0 1 1.061 0 .75.75 0 0 1 0 1.06l-.972.972zM19 2H5C3.35 2 2 3.35 2 5v14c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3" clipRule="evenodd"/>
  </svg>
));

IconCalculateFill.displayName = "IconCalculateFill";
