import * as React from "react";

export const IconShippingAddressFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m14.415 21-1.83-2.535-.02-.02a5.97 5.97 0 0 1-1.07-3.415c0-3.31 2.69-6 6-6h.24a5.9 5.9 0 0 1 2.26.545V6c0-1.655-1.345-3-3-3h-3v3c0 .83-.67 1.5-1.5 1.5h-3c-.83 0-1.5-.67-1.5-1.5V3H5C3.345 3 2 4.345 2 6v12c0 1.655 1.345 3 3 3zM12.5 3h-3v3h3zm5 7.53h.175c2.33.09 4.245 2.02 4.32 4.345a4.5 4.5 0 0 1-.8 2.715l-2.885 4a.998.998 0 0 1-1.62 0l-2.885-4A4.46 4.46 0 0 1 13 15.03a4.5 4.5 0 0 1 4.5-4.5m-1 4.005c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1" clipRule="evenodd"/>
  </svg>
));

IconShippingAddressFill.displayName = "IconShippingAddressFill";
