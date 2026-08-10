import * as React from "react";

export const IconWarningAltFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="m22.77 16.5-8.085-14A2.97 2.97 0 0 0 12.09 1a2.97 2.97 0 0 0-2.6 1.5l-8.085 14C1.12 17 .99 17.53 1 18.045s.155 1.015.405 1.455a2.97 2.97 0 0 0 2.6 1.5H20.17c.48 0 .92-.105 1.305-.295.42-.2.775-.5 1.055-.855.305-.39.51-.85.6-1.34a2.97 2.97 0 0 0-.36-2.01M12.085 6.295c.585 0 1.055.475 1.055 1.055l-.265 6.07c0 .435-.355.79-.79.79a.79.79 0 0 1-.79-.79l-.265-6.07c0-.585.47-1.055 1.055-1.055m0 11.61c-.73 0-1.32-.59-1.32-1.32s.59-1.32 1.32-1.32 1.32.59 1.32 1.32-.59 1.32-1.32 1.32"/>
  </svg>
));

IconWarningAltFill.displayName = "IconWarningAltFill";
