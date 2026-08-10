import * as React from "react";

export const IconCheckbox = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m17.282 9.28-6.425 6.426h-.002a.746.746 0 0 1-1.06 0h-.001L6.719 12.63a.75.75 0 1 1 1.06-1.06l2.547 2.545L16.22 8.22a.75.75 0 1 1 1.06 1.06M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconCheckbox.displayName = "IconCheckbox";
