import * as React from "react";

export const IconFlowData = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16.5 19.5h3v-3h-3zM6 19.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5m12-15c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5m-12 3c-.827 0-1.5-.673-1.5-1.5S5.173 4.5 6 4.5s1.5.673 1.5 1.5S6.827 7.5 6 7.5M19.5 15h-3a1.5 1.5 0 0 0-1.5 1.5v.75H8.902a3 3 0 0 0-.32-.771l7.897-7.897c.446.263.965.418 1.521.418a3 3 0 0 0 0-6 3 3 0 0 0-2.902 2.25H8.903A2.998 2.998 0 0 0 3 6a2.998 2.998 0 0 0 5.902.75h6.196q.108.412.32.771l-7.896 7.897A3 3 0 0 0 6 15a3 3 0 0 0 0 6 3 3 0 0 0 2.902-2.25H15v.75a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5" clipRule="evenodd"/>
  </svg>
));

IconFlowData.displayName = "IconFlowData";
