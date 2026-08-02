import * as React from "react";

export const IconColorSwitch = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.5 18c0 .827-.673 1.5-1.5 1.5H6c-.413 0-.788-.168-1.06-.44L19.06 4.94c.272.271.44.646.44 1.06zM18 3H6a3 3 0 0 0-3 3v12q.002.288.054.559.015.073.033.145A2.99 2.99 0 0 0 6 21h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconColorSwitch.displayName = "IconColorSwitch";
