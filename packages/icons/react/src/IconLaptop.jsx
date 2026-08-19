import * as React from "react";

export const IconLaptop = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20 17.5H4a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2M4 5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-10A.5.5 0 0 0 20 5z" clipRule="evenodd"/><path fill="currentColor" d="M1.75 19h20.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5"/>
  </svg>
));

IconLaptop.displayName = "IconLaptop";
