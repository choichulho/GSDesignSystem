import * as React from "react";

export const IconUserAvatarFillAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M10.4 14.619h3.2c2.153 0 4.065.96 5.227 2.424C17.277 19.135 14.798 20.5 12 20.5s-5.277-1.365-6.826-3.457c1.161-1.464 3.074-2.424 5.226-2.424m1.6-9.6a4 4 0 1 1 0 8 4 4 0 0 1 0-8M12 2C6.477 2 2 6.478 2 12c0 4.488 2.956 8.285 7.027 9.551.939.292 1.938.45 2.973.45a10 10 0 0 0 2.973-.45C19.045 20.284 22 16.487 22 12c0-5.523-4.477-10-10-10" clipRule="evenodd"/>
  </svg>
));

IconUserAvatarFillAlt.displayName = "IconUserAvatarFillAlt";
