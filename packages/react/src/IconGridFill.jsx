import * as React from "react";

export const IconGridFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3 9.5c0 .825.675 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5v-5c0-.825-.675-1.5-1.5-1.5h-5C3.675 3 3 3.675 3 4.5zm10 0c0 .825.675 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5v-5c0-.825-.675-1.5-1.5-1.5h-5c-.825 0-1.5.675-1.5 1.5zM4.5 21c-.825 0-1.5-.675-1.5-1.5v-5c0-.825.675-1.5 1.5-1.5h5c.825 0 1.5.675 1.5 1.5v5c0 .825-.675 1.5-1.5 1.5zm8.5-1.5c0 .825.675 1.5 1.5 1.5h5c.825 0 1.5-.675 1.5-1.5v-5c0-.825-.675-1.5-1.5-1.5h-5c-.825 0-1.5.675-1.5 1.5z" clipRule="evenodd"/>
  </svg>
));

IconGridFill.displayName = "IconGridFill";
