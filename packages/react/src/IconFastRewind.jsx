import * as React from "react";

export const IconFastRewind = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.85 6c.6 0 1.15.48 1.15 1.15V17.2c0 .67-.55 1.15-1.15 1.15-.19 0-.385-.05-.57-.155L.575 13.17A1.14 1.14 0 0 1 0 12.175c0-.385.19-.77.575-.995L9.28 6.155C9.465 6.05 9.66 6 9.85 6m-7.995 6.175L9.5 16.59V7.76z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M20.85 6c.6 0 1.15.48 1.15 1.15V17.2c0 .67-.55 1.15-1.15 1.15-.19 0-.385-.05-.57-.155l-8.705-5.025a1.14 1.14 0 0 1-.575-.995c0-.39.195-.775.575-.995l8.705-5.025c.185-.105.38-.155.57-.155m-7.995 6.175L20.5 16.59V7.76z" clipRule="evenodd"/>
  </svg>
));

IconFastRewind.displayName = "IconFastRewind";
