import * as React from "react";

export const IconUserAvatarFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20.5 12c0-4.687-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12c0 1.891.628 3.634 1.677 5.048 1.16-1.465 3.07-2.43 5.223-2.43h3.2c2.154 0 4.063.965 5.223 2.43A8.45 8.45 0 0 0 20.5 12M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14-2.98a4 4 0 1 1-8-.001 4 4 0 0 1 8 0" clipRule="evenodd"/>
  </svg>
));

IconUserAvatarFill.displayName = "IconUserAvatarFill";
