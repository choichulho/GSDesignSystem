import * as React from "react";

export const IconMic = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 2.5c-1.102 0-2 .898-2 2V12c0 1.102.898 2 2 2s2-.898 2-2V4.5c0-1.102-.898-2-2-2m3.5 9.5a3.5 3.5 0 1 1-7 0V4.5a3.5 3.5 0 1 1 7 0zm3.5-1.75V12c0 3.612-2.738 6.575-6.25 6.95v2.55h3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.5v-2.549C7.689 18.565 5 15.432 5 11.802V10.25a.75.75 0 0 1 1.5 0v1.589c0 2.862 2.12 5.367 4.97 5.636A5.507 5.507 0 0 0 17.5 12v-1.75a.75.75 0 0 1 1.5 0" clipRule="evenodd"/>
  </svg>
));

IconMic.displayName = "IconMic";
