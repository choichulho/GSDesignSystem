import * as React from "react";

export const IconFlashFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17.999 8.975h-2.655L16.7 3.23A1 1 0 0 0 15.726 2H8.241a1 1 0 0 0-.973.77l-2.24 9.5A1 1 0 0 0 6 13.5h3.352l-1.366 8.63c-.122.765.855 1.19 1.331.58l9.468-12.12A1 1 0 0 0 18 8.975" clipRule="evenodd"/>
  </svg>
));

IconFlashFill.displayName = "IconFlashFill";
