import * as React from "react";

export const IconArrowUpRight = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M17.92 17.755a.753.753 0 0 1-.75-.75V8.56L6.78 18.955a.744.744 0 0 1-1.05 0h-.005a.77.77 0 0 1-.225-.535c0-.19.075-.38.22-.525L16.11 7.5H7.67a.76.76 0 0 1-.42-.125A.752.752 0 0 1 7.67 6h10.245a.753.753 0 0 1 .75.75v10.255a.747.747 0 0 1-.75.75z"/>
  </svg>
));

IconArrowUpRight.displayName = "IconArrowUpRight";
