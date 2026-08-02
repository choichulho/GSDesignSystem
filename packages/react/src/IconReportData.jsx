import * as React from "react";

export const IconReportData = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)"><path d="M17 3.5V3c0-.83-.67-1.5-1.5-1.5h-7C7.67 1.5 7 2.17 7 3v.5c-1.655 0-3 1.345-3 3v13c0 1.655 1.345 3 3 3h10c1.655 0 3-1.345 3-3v-13c0-1.655-1.345-3-3-3M8.5 3h7v2h-7zm10 16.5c0 .825-.675 1.5-1.5 1.5H7c-.825 0-1.5-.675-1.5-1.5v-13C5.5 5.675 6.175 5 7 5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5.825 0 1.5.675 1.5 1.5z"/><path d="M12 11a.75.75 0 0 0-.75.75v6.5a.749.749 0 1 0 1.5 0v-6.5A.75.75 0 0 0 12 11m3.75 4.5a.75.75 0 0 0-.75.75v2a.749.749 0 1 0 1.5 0v-2a.75.75 0 0 0-.75-.75M8.25 14a.75.75 0 0 0-.75.75v3.5a.749.749 0 1 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75"/></g><defs><clipPath id="a"><path fill="currentColor" d="M4 1.5h16v21H4z"/></clipPath></defs>
  </svg>
));

IconReportData.displayName = "IconReportData";
