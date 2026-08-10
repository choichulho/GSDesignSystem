import * as React from "react";

export const IconAllCheck = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20.72 3.22a.75.75 0 1 1 1.06 1.06l-10.5 10.5a.7.7 0 0 1-.207.138.75.75 0 0 1-.323.082.75.75 0 0 1-.323-.082.7.7 0 0 1-.207-.138l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47zm-1.22 8.53a.75.75 0 0 1 1.5 0V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h9.25a.75.75 0 0 1 0 1.5H5A1.5 1.5 0 0 0 3.5 6v13A1.5 1.5 0 0 0 5 20.5h13a1.5 1.5 0 0 0 1.5-1.5z" clipRule="evenodd"/>
  </svg>
));

IconAllCheck.displayName = "IconAllCheck";
