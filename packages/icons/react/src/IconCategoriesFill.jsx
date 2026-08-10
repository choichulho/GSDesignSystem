import * as React from "react";

export const IconCategoriesFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16.75 2h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5m2 2.5H6.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5M6 7h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3" clipRule="evenodd"/>
  </svg>
));

IconCategoriesFill.displayName = "IconCategoriesFill";
