import * as React from "react";

export const IconExport = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M11.25 5.562 8.282 8.53A.751.751 0 1 1 7.22 7.468l4.248-4.248a.75.75 0 0 1 1.064 0l4.248 4.248a.751.751 0 0 1-1.062 1.062L12.75 5.562V16.25a.75.75 0 1 1-1.5 0zm8.25 8.188a.75.75 0 0 1 1.5 0V18c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3v-4.25a.75.75 0 0 1 1.5 0V18A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5z" clipRule="evenodd"/>
  </svg>
));

IconExport.displayName = "IconExport";
