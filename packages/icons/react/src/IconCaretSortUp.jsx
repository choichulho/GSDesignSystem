import * as React from "react";

export const IconCaretSortUp = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M7 8.25c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .529-1.282l-4.192-4.43A.75.75 0 0 0 12 3c-.24 0-.45.115-.587.289L7.222 7.718A.75.75 0 0 0 7 8.25" clipRule="evenodd"/>
  </svg>
));

IconCaretSortUp.displayName = "IconCaretSortUp";
