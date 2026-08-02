import * as React from "react";

export const IconLogout = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5 2h8c1.65 0 3 1.35 3 3v.75a.75.75 0 0 1-1.5 0V5A1.5 1.5 0 0 0 13 3.5H5A1.5 1.5 0 0 0 3.5 5v14A1.5 1.5 0 0 0 5 20.5h8a1.5 1.5 0 0 0 1.5-1.5v-.75a.75.75 0 0 1 1.5 0V19c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3m11.97 5.719a.747.747 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.062l-3.75 3.75a.75.75 0 0 1-1.06-1.061l2.47-2.47H9.75a.75.75 0 1 1 0-1.5h9.689l-2.47-2.47a.75.75 0 0 1 0-1.061" clipRule="evenodd"/>
  </svg>
));

IconLogout.displayName = "IconLogout";
