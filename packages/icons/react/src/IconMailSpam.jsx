import * as React from "react";

export const IconMailSpam = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M11.5 12.497c-.615 0-1.23-.204-1.732-.611L2.5 5.993V15.5A1.5 1.5 0 0 0 4 17h6.75a.75.75 0 0 1 0 1.5H4a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v3.75a.75.75 0 0 1-1.5 0V5.992l-7.268 5.894a2.75 2.75 0 0 1-1.732.61M19 4H4c-.408 0-.777.164-1.048.428l7.76 6.293c.457.37 1.12.37 1.576 0l7.76-6.292A1.5 1.5 0 0 0 19 4" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M13 16.5a5 5 0 1 1 10.001.001A5 5 0 0 1 13 16.5m3.116 2.945A3.47 3.47 0 0 0 18 20c1.93 0 3.5-1.57 3.5-3.5 0-.694-.206-1.34-.555-1.884zM18 13c-1.93 0-3.5 1.57-3.5 3.5 0 .694.206 1.34.555 1.884l4.83-4.829A3.5 3.5 0 0 0 18 13" clipRule="evenodd"/>
  </svg>
));

IconMailSpam.displayName = "IconMailSpam";
