import * as React from "react";

export const IconMailAll = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M10.713 11.221c.456.37 1.119.37 1.575 0l7.76-6.292A1.5 1.5 0 0 0 19 4.5H4c-.409 0-.777.164-1.048.429zm10.537-.72a.75.75 0 0 1-.75-.75V6.492l-7.268 5.893a2.75 2.75 0 0 1-1.732.61c-.616 0-1.23-.203-1.732-.61L2.5 6.493V16A1.5 1.5 0 0 0 4 17.5h6.75a.75.75 0 1 1 0 1.5H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v3.75a.75.75 0 0 1-.75.75m-6.72 4.469a.75.75 0 1 0-1.06 1.06l2.22 2.22-2.221 2.22a.75.75 0 1 0 1.06 1.06l2.751-2.75a.75.75 0 0 0 0-1.06zm8.25 2.75-2.75-2.75a.75.75 0 1 0-1.06 1.06l2.22 2.22-2.221 2.22a.75.75 0 1 0 1.06 1.06l2.751-2.75a.75.75 0 0 0 0-1.06" clipRule="evenodd"/>
  </svg>
));

IconMailAll.displayName = "IconMailAll";
