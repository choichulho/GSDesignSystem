import * as React from "react";

export const IconActivity = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.34 22a.75.75 0 0 1-.7-.483l-3.217-8.416H1.75a.75.75 0 0 1 0-1.5h4.19c.31 0 .59.192.7.482l2.69 7.036 5.785-15.63A.75.75 0 0 1 15.818 3h.002a.75.75 0 0 1 .702.491l2.974 8.11h2.754a.75.75 0 0 1 0 1.5h-3.277a.75.75 0 0 1-.705-.492l-2.453-6.69-5.771 15.592a.75.75 0 0 1-.7.489z" clipRule="evenodd"/>
  </svg>
));

IconActivity.displayName = "IconActivity";
