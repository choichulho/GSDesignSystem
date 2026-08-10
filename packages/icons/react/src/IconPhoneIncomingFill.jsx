import * as React from "react";

export const IconPhoneIncomingFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M4.98 3.48c.825.05 1.625.44 2.18 1.15l1.78 2.29c.62.795.55 1.925-.165 2.64l-.705.705a1.5 1.5 0 0 0-.105 2.01 28 28 0 0 0 1.79 1.965 28 28 0 0 0 1.965 1.79c.595.49 1.465.44 2.01-.105l.705-.705a1.995 1.995 0 0 1 2.64-.165l2.29 1.78v.005a2.99 2.99 0 0 1 1.155 2.53 3 3 0 0 1-.875 1.96l-.615.615c-2.475 2.475-8.045.44-12.73-4.245C1.61 13.01-.42 7.445 2.055 4.97l.615-.616a3 3 0 0 1 2.31-.875M20.255 3c.19 0 .38.075.525.22v-.005a.75.75 0 0 1 0 1.065l-6.22 6.22h4.69a.749.749 0 1 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 1 1 1.5 0v4.69l6.22-6.22c.15-.15.345-.22.535-.22"/>
  </svg>
));

IconPhoneIncomingFill.displayName = "IconPhoneIncomingFill";
