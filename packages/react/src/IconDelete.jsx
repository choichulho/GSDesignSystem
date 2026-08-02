import * as React from "react";

export const IconDelete = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.25 3h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5m2.258 17.987c.819 0 1.486-.667 1.486-1.487V6.013H6.021V19.5c0 .82.666 1.487 1.487 1.487zm3-16.487h.742a.75.75 0 0 1 0 1.5h-.742v13.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V6H3.75a.75.75 0 1 1 0-1.5zM10.5 17.25a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0zm3.75.75a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75" clipRule="evenodd"/>
  </svg>
));

IconDelete.displayName = "IconDelete";
