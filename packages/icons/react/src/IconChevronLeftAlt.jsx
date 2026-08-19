import * as React from "react";

export const IconChevronLeftAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M12.752 7.218a.75.75 0 0 1 1.06 1.061L10.093 12l3.72 3.72a.751.751 0 0 1-1.061 1.061l-4.247-4.248-.003-.001-.001-.001a.75.75 0 0 1 0-1.062l.004-.002z"/><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m1.5 0c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12" clipRule="evenodd"/>
  </svg>
));

IconChevronLeftAlt.displayName = "IconChevronLeftAlt";
