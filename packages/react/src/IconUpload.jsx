import * as React from "react";

export const IconUpload = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20.5 12c0-4.685-3.815-8.5-8.5-8.5S3.5 7.315 3.5 12s3.815 8.5 8.5 8.5 8.5-3.815 8.5-8.5M2 12C2 6.475 6.475 2 12 2s10 4.475 10 10-4.475 10-10 10S2 17.525 2 12m9.47-4.78A.75.75 0 0 1 12 7c.19 0 .385.075.53.22l3.75 3.75a.745.745 0 0 1 0 1.06.75.75 0 0 1-.53.22.75.75 0 0 1-.53-.22l-2.47-2.47v6.69a.749.749 0 1 1-1.5 0V9.56l-2.47 2.47a.75.75 0 0 1-.53.22.75.75 0 0 1-.53-.22.745.745 0 0 1 0-1.06z" clipRule="evenodd"/>
  </svg>
));

IconUpload.displayName = "IconUpload";
