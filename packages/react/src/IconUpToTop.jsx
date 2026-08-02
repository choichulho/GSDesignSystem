import * as React from "react";

export const IconUpToTop = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 1 1 0-1.5M12 10.5c.192 0 .384.073.53.22l6.25 6.249a.75.75 0 1 1-1.061 1.06L12 12.31l-5.72 5.72a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l6.249-6.25a.75.75 0 0 1 .53-.22z" clipRule="evenodd"/>
  </svg>
));

IconUpToTop.displayName = "IconUpToTop";
