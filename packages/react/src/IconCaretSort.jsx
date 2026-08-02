import * as React from "react";

export const IconCaretSort = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M7.75 9a.75.75 0 0 1-.529-1.282l4.192-4.43A.75.75 0 0 1 12 3c.24 0 .45.115.587.289l4.192 4.429A.75.75 0 0 1 16.25 9zm8.5 6a.75.75 0 0 1 .529 1.282l-4.192 4.43A.75.75 0 0 1 12 21a.75.75 0 0 1-.587-.288l-4.191-4.43A.75.75 0 0 1 7.75 15z" clipRule="evenodd"/>
  </svg>
));

IconCaretSort.displayName = "IconCaretSort";
