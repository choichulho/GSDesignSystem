import * as React from "react";

export const IconNavViewFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.001 13.955a5 5 0 1 0 10 0 5 5 0 0 0-10 0m5-9.455c5.618 0 10.484 3.6 12.872 8.855.173.379.173.82 0 1.199-2.389 5.254-7.254 8.855-12.872 8.855-5.617 0-10.483-3.6-12.872-8.855a1.46 1.46 0 0 1 0-1.199C3.518 8.101 8.384 4.5 14.001 4.5m-3.5 9.455c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5" clipRule="evenodd"/>
  </svg>
));

IconNavViewFill.displayName = "IconNavViewFill";
