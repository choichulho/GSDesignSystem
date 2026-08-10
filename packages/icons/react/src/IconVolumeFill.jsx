import * as React from "react";

export const IconVolumeFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16.317 2.071 10.5 7.501H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h3.5l5.817 5.43c.64.596 1.683.143 1.683-.732V2.803c0-.874-1.043-1.328-1.683-.731" clipRule="evenodd"/>
  </svg>
));

IconVolumeFill.displayName = "IconVolumeFill";
