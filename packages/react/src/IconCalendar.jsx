import * as React from "react";

export const IconCalendar = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M18 4h-1V2.75a.749.749 0 1 0-1.5 0V4h-7V2.75a.749.749 0 1 0-1.5 0V4H6C4.35 4 3 5.35 3 7v12c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3V7c0-1.65-1.35-3-3-3m1.5 15c0 .825-.675 1.5-1.5 1.5H6c-.825 0-1.5-.675-1.5-1.5v-8.98h15zm0-10.48h-15V7c0-.825.675-1.5 1.5-1.5h1v.75a.749.749 0 1 0 1.5 0V5.5h7v.75a.749.749 0 1 0 1.5 0V5.5h1c.825 0 1.5.675 1.5 1.5z"/>
  </svg>
));

IconCalendar.displayName = "IconCalendar";
