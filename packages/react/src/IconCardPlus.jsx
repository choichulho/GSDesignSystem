import * as React from "react";

export const IconCardPlus = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2.5 6V5A1.5 1.5 0 0 1 4 3.5h15A1.5 1.5 0 0 1 20.5 5v1zM19 2H4C2.35 2 1 3.35 1 5v10c0 1.65 1.35 3 3 3h5.75a.75.75 0 0 0 0-1.5H4A1.5 1.5 0 0 1 2.5 15V9h18v.75a.75.75 0 0 0 1.5 0V5c0-1.65-1.35-3-3-3M5.505 11.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm6.495 5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m9.5 0c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4m-4 3c.412 0 .75-.337.75-.75v-1.5h1.5c.413 0 .75-.337.75-.75a.75.75 0 0 0-.75-.75h-1.5v-1.5a.75.75 0 0 0-.75-.75.753.753 0 0 0-.75.75v1.5h-1.5a.75.75 0 0 0-.75.75c0 .413.338.75.75.75h1.5v1.5c0 .413.337.75.75.75" clipRule="evenodd"/>
  </svg>
));

IconCardPlus.displayName = "IconCardPlus";
