import * as React from "react";

export const IconPlayRectangle = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.5 4h15a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3M21 7c0-.827-.673-1.5-1.5-1.5h-15C3.673 5.5 3 6.173 3 7v10c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5zM9.071 15.332V8.668a.667.667 0 0 1 1-.578l5.772 3.332a.667.667 0 0 1 0 1.155l-5.771 3.332a.667.667 0 0 1-1-.577" clipRule="evenodd"/>
  </svg>
));

IconPlayRectangle.displayName = "IconPlayRectangle";
