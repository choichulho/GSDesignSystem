import * as React from "react";

export const IconPlayRectangleFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m15.843 12.578-5.771 3.332a.667.667 0 0 1-1-.578V8.668a.667.667 0 0 1 1-.578l5.771 3.332a.667.667 0 0 1 0 1.156M19.5 4h-15a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconPlayRectangleFill.displayName = "IconPlayRectangleFill";
