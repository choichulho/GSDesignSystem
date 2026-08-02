import * as React from "react";

export const IconInfo = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M13.75 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-.375 14h2.375a1 1 0 0 1 0 2h-7.5a1 1 0 0 1 0-2h3.125v-8h-2.5a1 1 0 0 1 0-2h3.5a1 1 0 0 1 1 1z" clipRule="evenodd"/>
  </svg>
));

IconInfo.displayName = "IconInfo";
