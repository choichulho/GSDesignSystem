import * as React from "react";

export const IconMinimize = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)"><path d="M9.25 14h-5.5a.749.749 0 1 0 0 1.5h3.69l-4.22 4.22a.745.745 0 0 0 0 1.06.745.745 0 0 0 1.06 0l4.22-4.22v3.69a.749.749 0 1 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75m11-5.5h-3.69l4.22-4.22a.745.745 0 0 0 0-1.06.745.745 0 0 0-1.06 0L15.5 7.44V3.75a.749.749 0 1 0-1.5 0v5.5c0 .415.335.75.75.75h5.5a.749.749 0 1 0 0-1.5"/></g><defs><clipPath id="a"><path fill="currentColor" d="M3 3h18v18H3z"/></clipPath></defs>
  </svg>
));

IconMinimize.displayName = "IconMinimize";
