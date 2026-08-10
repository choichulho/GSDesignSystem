import * as React from "react";

export const IconWarehouse = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.5 20.5V9.62c0-.535.285-1.03.75-1.3l6.5-3.755A.5.5 0 0 1 12 4.5c.09 0 .175.025.25.065l6.5 3.755c.465.265.75.765.75 1.3V20.5h-2v-6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v6zm3.5 0h8v-3H8zm13.75 0H21V9.62c0-1.07-.57-2.06-1.5-2.6L13 3.27a1.99 1.99 0 0 0-2 0L4.5 7.02A3 3 0 0 0 3 9.62V20.5h-.75a.75.75 0 0 0 0 1.5h19.5a.75.75 0 0 0 0-1.5m-8-12a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5zM8 14.5V16h8v-1.5c0-.275-.225-.5-.5-.5h-7c-.275 0-.5.225-.5.5" clipRule="evenodd"/>
  </svg>
));

IconWarehouse.displayName = "IconWarehouse";
