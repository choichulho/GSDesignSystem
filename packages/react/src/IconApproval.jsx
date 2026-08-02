import * as React from "react";

export const IconApproval = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)"><path d="M15.75 11.825a.75.75 0 0 0-.53.22l-4.645 4.645-1.795-1.795a.75.75 0 0 0-.53-.22.75.75 0 0 0-.53.22.745.745 0 0 0 0 1.06l2.32 2.32c.145.145.34.22.53.22s.385-.075.53-.22l5.175-5.175a.745.745 0 0 0 0-1.06.75.75 0 0 0-.53-.22z"/><path d="M17 3.5V3c0-.83-.67-1.5-1.5-1.5h-7C7.67 1.5 7 2.17 7 3v.5c-1.655 0-3 1.345-3 3v13c0 1.655 1.345 3 3 3h10c1.655 0 3-1.345 3-3v-13c0-1.655-1.345-3-3-3M8.5 3h7v2h-7zm10 16.5c0 .825-.675 1.5-1.5 1.5H7c-.825 0-1.5-.675-1.5-1.5v-13C5.5 5.675 6.175 5 7 5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5.825 0 1.5.675 1.5 1.5z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M4 1.5h16v21H4z"/></clipPath></defs>
  </svg>
));

IconApproval.displayName = "IconApproval";
