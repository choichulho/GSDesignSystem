import * as React from "react";

export const IconOrderCancel = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4 3.5A1.5 1.5 0 0 0 2.5 5v1h18V5A1.5 1.5 0 0 0 19 3.5zm0 13h5.75a.75.75 0 0 1 0 1.5H4c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h15c1.65 0 3 1.35 3 3v4.75a.75.75 0 0 1-1.5 0V9h-18v6A1.5 1.5 0 0 0 4 16.5m.505-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm12.995 8c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m0-9.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m1.222 3.218a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.06L18.561 16.5l1.221 1.222a.75.75 0 0 1 0 1.06.75.75 0 0 1-1.06 0L17.5 17.561l-1.222 1.221a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l1.221-1.222-1.221-1.222a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.222 1.221z" clipRule="evenodd"/>
  </svg>
));

IconOrderCancel.displayName = "IconOrderCancel";
