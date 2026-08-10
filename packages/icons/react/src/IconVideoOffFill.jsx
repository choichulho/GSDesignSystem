import * as React from "react";

export const IconVideoOffFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m17 8.782 3.536-2.967C21.512 4.996 23 5.69 23 6.965v9.118c0 1.274-1.488 1.968-2.464 1.149L17 14.265v1.802a3 3 0 0 1-3 3H4.493L2.28 21.281a.746.746 0 0 1-1.06 0 .75.75 0 0 1 0-1.061l1.46-1.461 13.617-13.62v.002L18.72 2.72a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.06l-2.822 2.822c.025.152.042.307.042.465zm-3-4.715c.372 0 .726.072 1.054.195L1.538 17.778A3 3 0 0 1 1 16.068v-9a3 3 0 0 1 3-3z" clipRule="evenodd"/>
  </svg>
));

IconVideoOffFill.displayName = "IconVideoOffFill";
