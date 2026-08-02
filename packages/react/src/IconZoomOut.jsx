import * as React from "react";

export const IconZoomOut = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3 10.505c0-4.14 3.36-7.5 7.5-7.5V3c4.14 0 7.5 3.36 7.5 7.5 0 1.71-.58 3.285-1.545 4.545l4.25 4.25a1 1 0 0 1 0 1.415 1 1 0 0 1-.705.295c-.255 0-.51-.1-.705-.295l-4.25-4.25a7.46 7.46 0 0 1-4.545 1.545c-4.14 0-7.5-3.36-7.5-7.5m1.5 0c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6-6 2.69-6 6m2.5 0c0-.415.34-.75.75-.75h5.5c.41 0 .75.335.75.75s-.34.75-.75.75h-5.5a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
  </svg>
));

IconZoomOut.displayName = "IconZoomOut";
