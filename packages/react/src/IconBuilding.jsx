import * as React from "react";

export const IconBuilding = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M10.25 8h-1.5a.749.749 0 1 0 0 1.5h1.5a.749.749 0 1 0 0-1.5m-1.5 3h1.5a.749.749 0 1 1 0 1.5h-1.5a.749.749 0 1 1 0-1.5m1.5 3h-1.5a.749.749 0 1 0 0 1.5h1.5a.749.749 0 1 0 0-1.5m3.5-6h1.5a.749.749 0 1 1 0 1.5h-1.5a.749.749 0 1 1 0-1.5m1.5 3h-1.5a.749.749 0 1 0 0 1.5h1.5a.749.749 0 1 0 0-1.5m-1.5 3h1.5a.749.749 0 1 1 0 1.5h-1.5a.749.749 0 1 1 0-1.5"/><path fill="currentColor" fillRule="evenodd" d="M20.25 21.5h-.75V6a2 2 0 0 0-2-2H17V2.5c0-.83-.67-1.5-1.5-1.5h-7C7.67 1 7 1.67 7 2.5V4h-.5a2 2 0 0 0-2 2v15.5h-.75a.749.749 0 1 0 0 1.5h16.5a.749.749 0 1 0 0-1.5M8.5 2.5h7V4h-7zm4.5 19h-2v-2h2zm5 0h-3.5v-2c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v2H6V6c0-.275.225-.5.5-.5h11c.275 0 .5.225.5.5z" clipRule="evenodd"/>
  </svg>
));

IconBuilding.displayName = "IconBuilding";
