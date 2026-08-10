import * as React from "react";

export const IconWallet = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5.06 7.5H19a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5.91A3.085 3.085 0 0 1 5.125 3h12.05A3 3 0 0 1 20 5a.755.755 0 0 1-.71 1 .76.76 0 0 1-.705-.5 1.5 1.5 0 0 0-1.41-1H5a1.5 1.5 0 0 0-1.47 1.8 1.54 1.54 0 0 0 1.53 1.2m15 11.56A1.5 1.5 0 0 0 20.5 18v-7.5A1.5 1.5 0 0 0 19 9H5a3 3 0 0 1-1.5-.405V18A1.5 1.5 0 0 0 5 19.5h14a1.5 1.5 0 0 0 1.06-.44m-1.81-4.56a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" clipRule="evenodd"/>
  </svg>
));

IconWallet.displayName = "IconWallet";
