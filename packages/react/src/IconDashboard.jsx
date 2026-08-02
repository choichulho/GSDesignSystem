import * as React from "react";

export const IconDashboard = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.5 3h5A1.5 1.5 0 0 1 11 4.5v7A1.5 1.5 0 0 1 9.5 13h-5A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m5 8.5h-5v-7h5zm5-.5h5a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-7a1.5 1.5 0 0 1 1.5-1.5m5 8.5h-5v-7h5zm0-16.5h-5A1.5 1.5 0 0 0 13 4.5v3A1.5 1.5 0 0 0 14.5 9h5A1.5 1.5 0 0 0 21 7.5v-3A1.5 1.5 0 0 0 19.5 3m-5 4.5h5v-3h-5zM4.5 15h5a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 9.5 21h-5A1.5 1.5 0 0 1 3 19.5v-3A1.5 1.5 0 0 1 4.5 15m5 4.5h-5v-3h5z" clipRule="evenodd"/>
  </svg>
));

IconDashboard.displayName = "IconDashboard";
