import * as React from "react";

export const IconChartNetwork = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M19.5 10.5c.83 0 1.5-.67 1.5-1.5V4.5c0-.83-.67-1.5-1.5-1.5H15c-.83 0-1.5.67-1.5 1.5V9c0 .83.67 1.5 1.5 1.5h1.5v3.075a3.76 3.76 0 0 0-2.925 2.925H10.5V15c0-.83-.67-1.5-1.5-1.5H7.5v-3.075A3.751 3.751 0 0 0 6.75 3 3.751 3.751 0 0 0 6 10.425V13.5H4.5c-.83 0-1.5.67-1.5 1.5v4.5c0 .83.67 1.5 1.5 1.5H9c.83 0 1.5-.67 1.5-1.5V18h3.075A3.751 3.751 0 1 0 18 13.575V10.5zm-15-3.75c0-1.24 1.01-2.25 2.25-2.25S9 5.51 9 6.75 7.99 9 6.75 9 4.5 7.99 4.5 6.75M9 19.5H4.5V15H9zm10.5-2.25c0 1.24-1.01 2.25-2.25 2.25S15 18.49 15 17.25 16.01 15 17.25 15s2.25 1.01 2.25 2.25M15 9V4.5h4.5V9z"/>
  </svg>
));

IconChartNetwork.displayName = "IconChartNetwork";
