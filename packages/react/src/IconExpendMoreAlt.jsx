import * as React from "react";

export const IconExpendMoreAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 20.5c4.687 0 8.5-3.813 8.5-8.5S16.687 3.5 12 3.5 3.5 7.313 3.5 12s3.813 8.5 8.5 8.5m0 1.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M7.218 11.248a.75.75 0 1 1 1.06-1.06L12 13.908l3.72-3.72a.75.75 0 0 1 1.06 1.061l-4.247 4.248-.002.003a.75.75 0 0 1-1.063-.002l-.001-.002z" clipRule="evenodd"/>
  </svg>
));

IconExpendMoreAlt.displayName = "IconExpendMoreAlt";
