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
    <path fill="currentColor" d="M15 1.5a3 3 0 0 1 3 3v2.25a.75.75 0 0 1-1.5 0V4.5A1.5 1.5 0 0 0 15 3H5a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 5 21h6.25a.75.75 0 0 1 0 1.5H5a3 3 0 0 1-3-3v-15a3 3 0 0 1 3-3zm2.5 8a4.5 4.5 0 0 1 3 7.852V22a.5.5 0 0 1-.724.447L17.5 21.31l-2.276 1.137A.5.5 0 0 1 14.5 22v-4.646a4.5 4.5 0 0 1 3-7.852m1.5 8.742a4.5 4.5 0 0 1-3 0v2.14l.83-.415a1.5 1.5 0 0 1 1.34 0l.83.415zM17.5 11c-1.655 0-3 1.345-3 3s1.345 3 3 3c1.654 0 3-1.345 3-3s-1.346-3-3-3m-7.25-1.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5zm3-3.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z"/>
  </svg>
));

IconPolicy.displayName = "IconPolicy";
