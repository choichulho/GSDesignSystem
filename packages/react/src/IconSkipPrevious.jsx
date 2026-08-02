import * as React from "react";

export const IconSkipPrevious = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4 4.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-1.5 0zM7.344 12 18.5 18.44V5.56zM17.75 4.26c.241-.14.498-.203.748-.203.783 0 1.502.626 1.502 1.502V18.44c0 .877-.719 1.503-1.502 1.503-.25 0-.507-.064-.748-.203L6.594 13.299a1.5 1.5 0 0 1 0-2.598z" clipRule="evenodd"/>
  </svg>
));

IconSkipPrevious.displayName = "IconSkipPrevious";
