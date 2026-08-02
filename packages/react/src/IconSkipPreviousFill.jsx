import * as React from "react";

export const IconSkipPreviousFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.5 4h1A1.5 1.5 0 0 1 7 5.5v13A1.5 1.5 0 0 1 5.5 20h-1A1.5 1.5 0 0 1 3 18.5v-13A1.5 1.5 0 0 1 4.5 4m3.594 6.701 11.156-6.44A1.5 1.5 0 0 1 21.5 5.56v12.88a1.5 1.5 0 0 1-2.25 1.3L8.094 13.299a1.5 1.5 0 0 1 0-2.598" clipRule="evenodd"/>
  </svg>
));

IconSkipPreviousFill.displayName = "IconSkipPreviousFill";
