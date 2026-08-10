import * as React from "react";

export const IconChevronMini = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M22 14v7.333a.667.667 0 0 1-.667.667H14z" clipRule="evenodd"/>
  </svg>
));

IconChevronMini.displayName = "IconChevronMini";
