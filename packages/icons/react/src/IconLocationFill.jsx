import * as React from "react";

export const IconLocationFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M11.885 1a8 8 0 0 0-6.46 12.555l5.945 9a.74.74 0 0 0 .625.335.74.74 0 0 0 .625-.335l5.945-9A8 8 0 0 0 19.99 8.73C19.855 4.42 16.195.94 11.885 1M12 12c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3" clipRule="evenodd"/>
  </svg>
));

IconLocationFill.displayName = "IconLocationFill";
