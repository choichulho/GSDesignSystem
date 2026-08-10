import * as React from "react";

export const IconProductSearch = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16 13a4 4 0 0 1 3.309 6.248l2.472 2.472a.751.751 0 0 1-1.061 1.06l-2.472-2.471A4 4 0 1 1 16 13m1-10a3 3 0 0 1 3 3v4.25a.75.75 0 0 1-.75.75l-.102-.007a.75.75 0 0 1-.648-.743V6A1.5 1.5 0 0 0 17 4.5h-3v3A1.5 1.5 0 0 1 12.5 9h-3A1.5 1.5 0 0 1 8 7.5v-3H5A1.5 1.5 0 0 0 3.5 6v12A1.5 1.5 0 0 0 5 19.5h4.25a.75.75 0 0 1 .75.75l-.007.102A.75.75 0 0 1 9.25 21H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-1 11.5a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5m-3.5-10h-3v3h3z" clipRule="evenodd"/>
  </svg>
));

IconProductSearch.displayName = "IconProductSearch";
