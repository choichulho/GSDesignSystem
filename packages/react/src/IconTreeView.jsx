import * as React from "react";

export const IconTreeView = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)"><path fill="currentColor" d="M17.5 14.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v1h-4V6a2 2 0 0 0-2-2H7v-.5C7 2.67 6.33 2 5.5 2h-3C1.67 2 1 2.67 1 3.5v3C1 7.33 1.67 8 2.5 8h3C6.33 8 7 7.33 7 6.5v-1h3c.275 0 .5.225.5.5v12a2 2 0 0 0 2 2H16v.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v1h-3.5a.5.5 0 0 1-.5-.5v-5.5h4v.5c0 .83.67 1.5 1.5 1.5m0-4.5h3v3h-3zm-12-3.5h-3v-3h3zm12 11h3v3h-3z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M1 2h21v20H1z"/></clipPath></defs>
  </svg>
));

IconTreeView.displayName = "IconTreeView";
