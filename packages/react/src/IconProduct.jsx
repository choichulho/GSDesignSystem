import * as React from "react";

export const IconProduct = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M18 3H6C4.345 3 3 4.345 3 6v12c0 1.655 1.345 3 3 3h12c1.655 0 3-1.345 3-3V6c0-1.655-1.345-3-3-3m-7.5 1.5h3v3h-3zm9 13.5c0 .825-.675 1.5-1.5 1.5H6c-.825 0-1.5-.675-1.5-1.5V6c0-.825.675-1.5 1.5-1.5h3v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3h3c.825 0 1.5.675 1.5 1.5z"/><path fill="currentColor" d="M6.75 15h3.5a.749.749 0 1 0 0-1.5h-3.5a.749.749 0 1 0 0 1.5m6.5 1.5h-6.5a.749.749 0 1 0 0 1.5h6.5a.749.749 0 1 0 0-1.5"/>
  </svg>
));

IconProduct.displayName = "IconProduct";
