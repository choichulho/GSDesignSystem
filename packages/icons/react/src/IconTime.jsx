import * as React from "react";

export const IconTime = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20.5 12c0-4.685-3.815-8.5-8.5-8.5S3.5 7.315 3.5 12s3.815 8.5 8.5 8.5 8.5-3.815 8.5-8.5M2 12C2 6.475 6.475 2 12 2s10 4.475 10 10-4.475 10-10 10S2 17.525 2 12m12.225 3.505c.14.115.31.175.48.175l.005-.005c.215 0 .425-.09.575-.265a.75.75 0 0 0-.09-1.055l-2.45-2.06V7.5a.749.749 0 1 0-1.5 0v5.145c0 .22.095.43.265.575z" clipRule="evenodd"/>
  </svg>
));

IconTime.displayName = "IconTime";
