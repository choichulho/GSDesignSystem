import * as React from "react";

export const IconXAxis = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.75 2.5a.75.75 0 0 0-.75.75v12.5a3 3 0 0 0 3 3h12.44l-1.471 1.47a.751.751 0 0 0 1.06 1.06l2.752-2.75a.75.75 0 0 0 0-1.06l-2.75-2.75a.75.75 0 0 0-1.061 0 .75.75 0 0 0 0 1.06l1.47 1.47H6a1.5 1.5 0 0 1-1.5-1.5V3.25a.75.75 0 0 0-.75-.75" clipRule="evenodd"/>
  </svg>
));

IconXAxis.displayName = "IconXAxis";
