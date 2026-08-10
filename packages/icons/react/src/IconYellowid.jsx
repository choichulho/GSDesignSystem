import * as React from "react";

export const IconYellowid = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M7.568 3.211a1.17 1.17 0 0 0-.287 1.627l3.584 5.118q.046.065.097.12v5.086a1.168 1.168 0 0 0 2.335 0V10.06q.043-.048.081-.103l3.584-5.118a1.168 1.168 0 1 0-1.913-1.34L12.122 7.68 9.194 3.5a1.167 1.167 0 0 0-1.626-.288M18.26 18.957H6V21h12.26z" clipRule="evenodd"/>
  </svg>
));

IconYellowid.displayName = "IconYellowid";
