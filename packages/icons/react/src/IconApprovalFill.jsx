import * as React from "react";

export const IconApprovalFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.5 5h-5a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V4a1 1 0 0 1-1 1m-3.395 13.279 5.175-5.175a.75.75 0 1 0-1.06-1.061l-4.647 4.646-1.793-1.793a.75.75 0 0 0-1.06 1.061l2.321 2.322.002.002a.75.75 0 0 0 1.06 0zM17 5V3.5a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3V5a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 17 5" clipRule="evenodd"/>
  </svg>
));

IconApprovalFill.displayName = "IconApprovalFill";
