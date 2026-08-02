import * as React from "react";

export const IconNoticeFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.5 2.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0v-.364l-7-2.867V5.981l7-2.867zM1 9.5a3 3 0 0 1 3-3h6.643q.18-.002.357-.024V21a1 1 0 0 1-1 1h-.764c-.758 0-1.45-.427-1.789-1.105l-2.7-5.395H4a3 3 0 0 1-3-3z" clipRule="evenodd"/>
  </svg>
));

IconNoticeFill.displayName = "IconNoticeFill";
