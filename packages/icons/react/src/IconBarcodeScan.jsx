import * as React from "react";

export const IconBarcodeScan = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21.25 15a.75.75 0 0 1 .75.75V18a3 3 0 0 1-3 3h-2.25a.75.75 0 0 1 0-1.5H19a1.5 1.5 0 0 0 1.5-1.5v-2.25a.75.75 0 0 1 .75-.75m-18.5 0a.75.75 0 0 1 .75.75V18A1.5 1.5 0 0 0 5 19.5h2.25a.75.75 0 0 1 0 1.5H5a3 3 0 0 1-3-3v-2.25a.75.75 0 0 1 .75-.75m4.5-7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5zm7.5 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5zm3.5 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5zM9.5 8a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25H9a.25.25 0 0 1-.25-.25v-7.5A.25.25 0 0 1 9 8zm2 0a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25H11a.25.25 0 0 1-.25-.25v-7.5A.25.25 0 0 1 11 8zM19 3a3 3 0 0 1 3 3v2.25a.75.75 0 0 1-1.5 0V6A1.5 1.5 0 0 0 19 4.5h-2.25a.75.75 0 0 1 0-1.5zM7.25 3a.75.75 0 0 1 0 1.5H5A1.5 1.5 0 0 0 3.5 6v2.25a.75.75 0 0 1-1.5 0V6a3 3 0 0 1 3-3z" clipRule="evenodd"/>
  </svg>
));

IconBarcodeScan.displayName = "IconBarcodeScan";
