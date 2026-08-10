import * as React from "react";

export const IconGraphicEq = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 22a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v18.5A.75.75 0 0 1 12 22m-4.75-2.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 1.5 0v13.5a.75.75 0 0 1-.75.75m8.75-.75a.75.75 0 0 0 1.5 0V5.25a.75.75 0 0 0-1.5 0zM2.75 15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75m17.75-.75a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0z" clipRule="evenodd"/>
  </svg>
));

IconGraphicEq.displayName = "IconGraphicEq";
