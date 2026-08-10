import * as React from "react";

export const IconCaretRight = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.75 7a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.282.528l4.43-4.191A.75.75 0 0 0 15 12c0-.24-.114-.45-.289-.588l-4.429-4.19A.75.75 0 0 0 9.75 7" clipRule="evenodd"/>
  </svg>
));

IconCaretRight.displayName = "IconCaretRight";
