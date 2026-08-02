import * as React from "react";

export const IconChromecast = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)"><path d="M19 4H5C3.345 4 2 5.345 2 7v1.25a.749.749 0 1 0 1.5 0V7c0-.83.67-1.5 1.5-1.5h14c.83 0 1.5.67 1.5 1.5v10.5c0 .83-.67 1.5-1.5 1.5h-4.75a.749.749 0 1 0 0 1.5H19c1.655 0 3-1.345 3-3V7c0-1.655-1.345-3-3-3"/><path d="M2 12c4.685 0 8.5 3.815 8.5 8.5H12c0-5.525-4.475-10-10-10z"/><path d="M2 15.5c2.755 0 5 2.245 5 5h1.5A6.5 6.5 0 0 0 2 14zm0 5h3c0-1.655-1.345-3-3-3z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M2 4h20v16.5H2z"/></clipPath></defs>
  </svg>
));

IconChromecast.displayName = "IconChromecast";
