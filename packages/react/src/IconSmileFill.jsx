import * as React from "react";

export const IconSmileFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2M8.75 8.5c.965 0 1.75.785 1.75 1.75S9.715 12 8.75 12 7 11.215 7 10.25 7.785 8.5 8.75 8.5m7.875 6.91a5.74 5.74 0 0 1-9.25 0c-.26-.35-.14-.85.23-1.07.325-.195.755-.125.975.175A4.25 4.25 0 0 0 12 16.25c1.4 0 2.645-.685 3.42-1.735.225-.305.655-.37.975-.175.37.225.485.725.23 1.07M15.25 12c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75S17 9.285 17 10.25 16.215 12 15.25 12" clipRule="evenodd"/>
  </svg>
));

IconSmileFill.displayName = "IconSmileFill";
