import * as React from "react";

export const IconBluetoothFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M11.5 2C7.36 2 4 5.36 4 9.5v5c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5v-5C19 5.36 15.64 2 11.5 2m3.8 11.91c.265.15.405.43.4.715a.8.8 0 0 1-.285.64l-4.23 3.55c-.16.13-.35.19-.54.185h-.035a.75.75 0 0 1-.75-.75v-4.42l-1.275 1.275a.75.75 0 0 1-.53.22.75.75 0 0 1-.53-.22.745.745 0 0 1 0-1.06L9.54 12.03l-2.015-2.015a.75.75 0 0 1 1.06-1.06L9.86 10.23V5.75c0-.415.335-.75.75-.75h.035a.8.8 0 0 1 .54.185l4.23 3.55c.195.165.29.405.285.64 0 .285-.135.56-.4.715L11.995 12zm-3.94-3.41 2.155-1.245-2.155-1.81zm2.155 4.245-2.155 1.81V13.5z" clipRule="evenodd"/>
  </svg>
));

IconBluetoothFill.displayName = "IconBluetoothFill";
