import * as React from "react";

export const IconShareAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m12.53 1.22 3.75 3.75a.745.745 0 0 1 0 1.06.745.745 0 0 1-1.06 0l-2.47-2.47v10.69a.749.749 0 1 1-1.5 0V3.56L8.78 6.03a.75.75 0 0 1-1.06-1.06l3.75-3.75a.745.745 0 0 1 1.06 0m4.22 6.28H18c1.65 0 3 1.35 3 3V19c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3v-8.5c0-1.65 1.35-3 3-3h1.25a.749.749 0 1 1 0 1.5H6c-.83 0-1.5.67-1.5 1.5V19c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5v-8.5c0-.83-.67-1.5-1.5-1.5h-1.25a.749.749 0 1 1 0-1.5" clipRule="evenodd"/>
  </svg>
));

IconShareAlt.displayName = "IconShareAlt";
