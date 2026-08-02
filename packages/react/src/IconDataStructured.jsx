import * as React from "react";

export const IconDataStructured = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M18 19.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5M13.5 21h-3v-3h3zm-9 0c.827 0 1.5-.673 1.5-1.5S5.327 18 4.5 18 3 18.673 3 19.5 3.673 21 4.5 21m15-13.5h-15V3h15zm.75 6.5v2.599a2.998 2.998 0 0 1-.75 5.901 2.998 2.998 0 0 1-.75-5.901V14a.5.5 0 0 0-.5-.5h-5.5v3H14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.25v-3h-5.5a.5.5 0 0 0-.5.5v2.599A2.998 2.998 0 0 1 4.5 22.5a2.998 2.998 0 0 1-.75-5.901V14a2 2 0 0 1 2-2h5.5V9H4a1 1 0 0 1-1-1V3a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 3v5a1 1 0 0 1-1 1h-7.25v3h5.5a2 2 0 0 1 2 2M6 5.25c0-.412.338-.75.75-.75s.75.338.75.75-.338.75-.75.75A.75.75 0 0 1 6 5.25" clipRule="evenodd"/>
  </svg>
));

IconDataStructured.displayName = "IconDataStructured";
