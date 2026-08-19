import * as React from "react";

export const IconCloseAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M15.005 8.245c.19 0 .385.075.53.22.29.29.29.77 0 1.06L13.06 12l2.475 2.475c.29.29.29.77 0 1.06a.76.76 0 0 1-.53.22.76.76 0 0 1-.53-.22L12 13.06l-2.475 2.475a.76.76 0 0 1-.53.22.76.76 0 0 1-.53-.22.755.755 0 0 1 0-1.06L10.94 12 8.465 9.525a.755.755 0 0 1 0-1.06.76.76 0 0 1 .53-.22c.19 0 .385.075.53.22L12 10.94l2.475-2.475a.76.76 0 0 1 .53-.22"/><path fill="currentColor" fillRule="evenodd" d="M12 2c5.525 0 10 4.475 10 10s-4.475 10-10 10S2 17.525 2 12 6.475 2 12 2m0 1.5c-4.685 0-8.5 3.815-8.5 8.5s3.815 8.5 8.5 8.5 8.5-3.815 8.5-8.5-3.815-8.5-8.5-8.5" clipRule="evenodd"/>
  </svg>
));

IconCloseAlt.displayName = "IconCloseAlt";
