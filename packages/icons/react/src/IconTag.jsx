import * as React from "react";

export const IconTag = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M10.66 2c.795 0 1.555.315 2.12.88l8.34 8.34c.625.625.92 1.46.875 2.28-.04.715-.33 1.42-.875 1.965l-5.655 5.655a2.996 2.996 0 0 1-4.24 0L2.88 12.775a3 3 0 0 1-.88-2.12V4a2 2 0 0 1 2-2zM4 3.5c-.275 0-.5.225-.5.5v6.66c0 .4.155.775.44 1.06l8.345 8.335c.285.285.66.44 1.06.44s.775-.155 1.06-.44L20.06 14.4v.005a1.5 1.5 0 0 0 0-2.12L11.715 3.94a1.5 1.5 0 0 0-1.06-.44zm3 2a1.5 1.5 0 1 1-.002 3A1.5 1.5 0 0 1 7 5.5"/>
  </svg>
));

IconTag.displayName = "IconTag";
