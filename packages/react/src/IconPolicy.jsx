import * as React from "react";

export const IconPolicy = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.5 19.5A1.5 1.5 0 0 0 5 21h6.25a.75.75 0 0 1 0 1.5H5a3 3 0 0 1-3-3v-15a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2.25a.75.75 0 0 1-1.5 0V4.5A1.5 1.5 0 0 0 15 3H5a1.5 1.5 0 0 0-1.5 1.5zM13.25 6h-6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5m-3 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5m7.25 0a4.5 4.5 0 0 0-3 7.854V22a.5.5 0 0 0 .723.447l2.277-1.138 2.276 1.138q.111.055.224.054a.5.5 0 0 0 .5-.5v-4.646a4.5 4.5 0 0 0-3-7.854m1.5 8.744c-.47.166-.974.256-1.5.256s-1.03-.09-1.5-.256v2.137l.829-.414a1.5 1.5 0 0 1 1.342 0l.829.414zM17.5 11c1.654 0 3 1.345 3 3s-1.346 3-3 3c-1.655 0-3-1.345-3-3s1.345-3 3-3" clipRule="evenodd"/>
  </svg>
));

IconPolicy.displayName = "IconPolicy";
