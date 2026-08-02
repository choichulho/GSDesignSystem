import * as React from "react";

export const IconNavView = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2.504 14.055c2.24 4.907 6.644 7.954 11.497 7.954 4.854 0 9.257-3.047 11.497-7.954C23.258 9.147 18.855 6.1 14.001 6.1c-4.853 0-9.257 3.048-11.497 7.955M14.001 4.6c5.618 0 10.484 3.6 12.872 8.855.173.38.173.82 0 1.2-2.388 5.254-7.254 8.854-12.872 8.854-5.617 0-10.483-3.6-12.872-8.855a1.45 1.45 0 0 1 0-1.199C3.518 8.201 8.384 4.6 14.001 4.6m-3.5 9.455c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5m-1.5 0a5 5 0 1 1 10 0 5 5 0 0 1-10 0" clipRule="evenodd"/>
  </svg>
));

IconNavView.displayName = "IconNavView";
