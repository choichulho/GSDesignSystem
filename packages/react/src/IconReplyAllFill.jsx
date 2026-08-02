import * as React from "react";

export const IconReplyAllFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)"><path d="M13 4.5c-.35 0-.665.145-.895.38l-6.24 6.24a1.23 1.23 0 0 0-.36.96c.02.29.14.58.36.8l6.24 6.24a1.24 1.24 0 0 0 1.14.355c.6-.115 1.005-.68 1.005-1.285V15.4c3.2 0 5.76 1.66 7.645 3.88.13.15.3.22.465.22a.625.625 0 0 0 .63-.61c0-.13.01-.265.01-.4 0-5.1-3.925-9.75-8.75-9.75V5.82c0-.67-.5-1.275-1.17-1.32z"/><path d="M8.295 4.5a.75.75 0 0 0-.53.22l-6.4 6.4C1.12 11.365 1 11.68 1 12s.12.64.365.88l6.4 6.4c.145.145.34.22.53.22s.385-.075.53-.22a.745.745 0 0 0 0-1.06L2.96 12.355a.503.503 0 0 1 0-.71L8.825 5.78a.745.745 0 0 0 0-1.06.75.75 0 0 0-.53-.22"/></g><defs><clipPath id="a"><path fill="currentColor" d="M1 4.5h22v15.005H1z"/></clipPath></defs>
  </svg>
));

IconReplyAllFill.displayName = "IconReplyAllFill";
