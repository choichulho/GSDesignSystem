import * as React from "react";

export const IconCardSale = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3 6V5a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 5v1zm16.5-4h-15c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h6.25a.75.75 0 0 0 0-1.5H4.5A1.5 1.5 0 0 1 3 15V9h18v2.25a.75.75 0 0 0 1.5 0V5c0-1.65-1.35-3-3-3M6.005 11.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm15.215 2.72a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06zM21 19a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 21 19m-3.5-3.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001" clipRule="evenodd"/>
  </svg>
));

IconCardSale.displayName = "IconCardSale";
