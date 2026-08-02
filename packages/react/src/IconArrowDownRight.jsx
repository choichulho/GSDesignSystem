import * as React from "react";

export const IconArrowDownRight = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M17.42 6.42a.753.753 0 0 0-.75.75v8.44L6.28 5.22a.74.74 0 0 0-1.055 0H5.22a.743.743 0 0 0 0 1.055L15.61 16.67H7.17a.753.753 0 0 0-.75.75.753.753 0 0 0 .75.75h10.245a.753.753 0 0 0 .75-.75V7.17a.753.753 0 0 0-.75-.75z"/>
  </svg>
));

IconArrowDownRight.displayName = "IconArrowDownRight";
