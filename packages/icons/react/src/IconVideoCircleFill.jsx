import * as React from "react";

export const IconVideoCircleFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M18.5 14.609a.75.75 0 0 1-1.233.574l-2.04-1.712v1.12a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5V9.409A1.5 1.5 0 0 1 8 7.91h5.727a1.5 1.5 0 0 1 1.5 1.5v1.071l2.04-1.712a.75.75 0 0 1 1.233.575zM12 1.999C6.477 2 2 6.478 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.522-4.477-10-10-10" clipRule="evenodd"/>
  </svg>
));

IconVideoCircleFill.displayName = "IconVideoCircleFill";
