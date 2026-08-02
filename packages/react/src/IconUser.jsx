import * as React from "react";

export const IconUser = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M6.983 7.142C6.905 4.315 9.18 2 12 2c2.772 0 5.019 2.239 5.019 5 0 2.809-2.325 5.076-5.161 4.998-2.62-.072-4.803-2.247-4.875-4.856m8.53-.09A3.51 3.51 0 0 0 12 3.5 3.51 3.51 0 0 0 8.487 7a3.51 3.51 0 0 0 3.565 3.5c1.864-.027 3.433-1.591 3.46-3.448m4.984 14.273c-.34-3.268-3.12-5.825-6.49-5.825H9.992c-3.368 0-6.15 2.557-6.49 5.825a.75.75 0 0 1-.744.675h-.002a.75.75 0 0 1-.752-.816C2.414 17.15 5.834 14 9.992 14h4.015c4.159 0 7.58 3.15 7.99 7.184a.75.75 0 0 1-.753.816h-.002a.75.75 0 0 1-.745-.675" clipRule="evenodd"/>
  </svg>
));

IconUser.displayName = "IconUser";
