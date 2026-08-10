import * as React from "react";

export const IconUser2 = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 5a3.75 3.75 0 1 0-.001 7.499A3.75 3.75 0 0 0 8 5m0 1.5c1.24 0 2.25 1.01 2.25 2.25S9.24 11 8 11 5.75 9.99 5.75 8.75 6.76 6.5 8 6.5m5 3.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m4.5 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.5 1.5 1.5-.673 1.5-1.5m-1.75 4h1.65c3.076 0 5.594 2.4 5.6 5.336-.002.367-.315.664-.7.664h-4.55a.75.75 0 0 1 0-1.5h3.652c-.41-1.71-2.05-3-4.002-3h-1.65a.75.75 0 0 1 0-1.5M1 19.336C1.007 16.401 3.704 14 7 14h2c3.296 0 5.993 2.4 6 5.336-.002.367-.338.664-.75.664H1.75c-.413 0-.747-.297-.75-.664m12.392-.836c-.448-1.71-2.249-3-4.392-3H7c-2.139 0-3.937 1.285-4.39 3z" clipRule="evenodd"/>
  </svg>
));

IconUser2.displayName = "IconUser2";
