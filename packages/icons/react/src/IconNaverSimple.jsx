import * as React from "react";

export const IconNaverSimple = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.757 4v8.072L9.227 4H3.25v16h5.957v-8.072L14.737 20h5.977V4z" clipRule="evenodd"/>
  </svg>
));

IconNaverSimple.displayName = "IconNaverSimple";
