import * as React from "react";

export const IconDiscountRate = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M6.5 12a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 6.5 12M12 9.75a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 12 9.75m-1.5 6a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001"/><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m1.5 0c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12" clipRule="evenodd"/>
  </svg>
));

IconDiscountRate.displayName = "IconDiscountRate";
