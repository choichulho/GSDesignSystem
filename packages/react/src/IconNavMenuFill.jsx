import * as React from "react";

export const IconNavMenuFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5.25 5h17.5a1.25 1.25 0 1 1 0 2.5H5.25a1.25 1.25 0 1 1 0-2.5m17.5 7.75H5.25a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5m0 7.75H5.25a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5" clipRule="evenodd"/>
  </svg>
));

IconNavMenuFill.displayName = "IconNavMenuFill";
