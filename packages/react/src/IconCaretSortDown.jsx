import * as React from "react";

export const IconCaretSortDown = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17 15.75a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.528 1.282l4.191 4.43A.75.75 0 0 0 12 21c.24 0 .45-.114.588-.288l4.19-4.43A.75.75 0 0 0 17 15.75" clipRule="evenodd"/>
  </svg>
));

IconCaretSortDown.displayName = "IconCaretSortDown";
