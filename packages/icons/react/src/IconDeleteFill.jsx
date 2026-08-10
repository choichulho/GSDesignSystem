import * as React from "react";

export const IconDeleteFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.25 3.5h-4.5a.749.749 0 1 1 0-1.5h4.5a.749.749 0 1 1 0 1.5M19.505 5h.745a.749.749 0 1 1 0 1.5h-.745V20c0 1.655-1.345 3-3 3h-9c-1.655 0-3-1.345-3-3V6.5h-.76a.749.749 0 1 1 0-1.5zM9.75 18.5c.415 0 .75-.335.75-.75v-7.5a.749.749 0 1 0-1.5 0v7.5c0 .415.335.75.75.75m4.5 0c.415 0 .75-.335.75-.75v-7.5a.749.749 0 1 0-1.5 0v7.5c0 .415.335.75.75.75" clipRule="evenodd"/>
  </svg>
));

IconDeleteFill.displayName = "IconDeleteFill";
