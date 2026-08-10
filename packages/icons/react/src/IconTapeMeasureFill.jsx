import * as React from "react";

export const IconTapeMeasureFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M17 14.5h5.5c.83 0 1.5.67 1.5 1.5v2.5c0 .83-.67 1.5-1.5 1.5H20v-1.25a.749.749 0 1 0-1.5 0V20h-3v-1.25a.749.749 0 1 0-1.5 0V20h-3v-1.25a.749.749 0 1 0-1.5 0V20h-1v-.015C4.315 19.82 1 17.655 1 15v-3.455c1.675 1.79 4.6 2.955 8 2.955s6.325-1.165 8-2.955zM9 6.75c1.036 0 1.875.421 1.875.94 0 .52-.84.94-1.875.94s-1.875-.42-1.875-.94c0-.519.84-.94 1.875-.94"/><path fill="currentColor" fillRule="evenodd" d="M9 3c4.42 0 8 2.24 8 5s-3.58 5-8 5-8-2.24-8-5 3.58-5 8-5m0 2.495c-1.75 0-3.125.96-3.125 2.19S7.25 9.875 9 9.875s3.125-.96 3.125-2.19S10.75 5.495 9 5.495" clipRule="evenodd"/>
  </svg>
));

IconTapeMeasureFill.displayName = "IconTapeMeasureFill";
