import * as React from "react";

export const IconShoppingBagFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M15.75 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-7.5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2M9 4.5c0-1.654 1.345-3 3-3s3 1.346 3 3V5H9zm9 .5h-1.5v-.5a4.5 4.5 0 1 0-9 0V5H6a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconShoppingBagFill.displayName = "IconShoppingBagFill";
