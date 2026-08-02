import * as React from "react";

export const IconNavHomeFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M15 20.567c0 .598-.448 1.083-1 1.083s-1-.485-1-1.083v-4.334c0-.598.448-1.083 1-1.083s1 .485 1 1.083zm8.998-9.973-8.436-7.535a2.195 2.195 0 0 0-2.93-.001l-8.629 7.698A3 3 0 0 0 3 12.995V22.5a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9.669a3 3 0 0 0-1.002-2.237" clipRule="evenodd"/>
  </svg>
));

IconNavHomeFill.displayName = "IconNavHomeFill";
