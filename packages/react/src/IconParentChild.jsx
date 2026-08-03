import * as React from "react";

export const IconParentChild = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M20 9.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3.5a2 2 0 0 0 2 2h7.3V12H7.54c-1.1 0-1.99.895-1.99 2l-.035 2H3.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H7.015l.035-2c0-.275.22-.5.49-.5h8.97c.27 0 .49.225.49.475L16.965 16H14.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-2.035l.035-2c0-1.105-.89-2-1.99-2H12.8V9.5zm-10.5 8v3h-6v-3zm11 0v3h-6v-3zM11.3 8H4a.5.5 0 0 1-.5-.5V4c0-.275.225-.5.5-.5h16c.275 0 .5.225.5.5v3.5c0 .275-.225.5-.5.5z"/>
  </svg>
));

IconParentChild.displayName = "IconParentChild";
