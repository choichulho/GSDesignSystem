import * as React from "react";

export const IconWarningFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 17.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m0-11a1 1 0 0 1 1 1l-.25 5.75a.75.75 0 0 1-1.5 0L11 7.5a1 1 0 0 1 1-1M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" clipRule="evenodd"/>
  </svg>
));

IconWarningFill.displayName = "IconWarningFill";
