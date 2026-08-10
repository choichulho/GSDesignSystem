import * as React from "react";

export const IconNavHome = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12.632 3.059a2.195 2.195 0 0 1 2.93 0l8.437 7.535A3 3 0 0 1 25 12.83v9.67a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9.505c0-.855.364-1.67 1.002-2.238zm1.931 1.119a.7.7 0 0 0-.933 0l-8.629 7.698a1.5 1.5 0 0 0-.5 1.119V22.5c0 .827.672 1.5 1.5 1.5h16c.826 0 1.5-.673 1.5-1.5v-9.669c0-.426-.184-.835-.502-1.118zM13 16.233c0-.598.448-1.083 1-1.083s1 .485 1 1.083v4.333c0 .599-.448 1.084-1 1.084s-1-.485-1-1.084z" clipRule="evenodd"/>
  </svg>
));

IconNavHome.displayName = "IconNavHome";
