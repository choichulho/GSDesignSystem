import * as React from "react";

export const IconReport = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)"><path d="M15.25 8.5h-6.5a.749.749 0 1 0 0 1.5h6.5a.749.749 0 1 0 0-1.5m-2 3.5h-4.5a.749.749 0 1 0 0 1.5h4.5a.749.749 0 1 0 0-1.5m-2 3.5h-2.5a.749.749 0 1 0 0 1.5h2.5a.749.749 0 1 0 0-1.5"/><path d="M17 3.5V3c0-.83-.67-1.5-1.5-1.5h-7C7.67 1.5 7 2.17 7 3v.5c-1.655 0-3 1.345-3 3v13c0 1.655 1.345 3 3 3h10c1.655 0 3-1.345 3-3v-13c0-1.655-1.345-3-3-3M8.5 3h7v2h-7zm10 16.5c0 .825-.675 1.5-1.5 1.5H7c-.825 0-1.5-.675-1.5-1.5v-13C5.5 5.675 6.175 5 7 5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5.825 0 1.5.675 1.5 1.5z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M4 1.5h16v21H4z"/></clipPath></defs>
  </svg>
));

IconReport.displayName = "IconReport";
