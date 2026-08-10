import * as React from "react";

export const IconDocExport = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17 21c.827 0 1.5-.673 1.5-1.5v-10h-4.722A1.78 1.78 0 0 1 12 7.722V3H7c-.827 0-1.5.673-1.5 1.5v15c0 .827.673 1.5 1.5 1.5zm1.102-13L13.5 3.354v4.368c0 .153.124.278.278.278zm-3.805-5.973 5.188 5.237c.33.333.515.783.515 1.251V19.5c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3v-15c0-1.65 1.35-3 3-3h6.034c.475 0 .93.19 1.263.527m-3.327 9.692a.75.75 0 0 1 1.061 0 .75.75 0 0 1 0 1.062l-1.47 1.469h4.689a.75.75 0 0 1 0 1.5h-4.69l1.47 1.47a.75.75 0 0 1-1.06 1.06l-2.75-2.75a.75.75 0 0 1 0-1.06z" clipRule="evenodd"/>
  </svg>
));

IconDocExport.displayName = "IconDocExport";
