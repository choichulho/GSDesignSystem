import * as React from "react";

export const IconPlaneArrivalFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="m15.015 11.25 3.805 1.02c1.665.445 3.8 1.88 3.37 3.49s-3 1.785-4.665 1.34L8.41 14.655l-4.98-2a1 1 0 0 1-.625-.95c.035-1.43.105-3.655.255-5.64.025-.31.33-.52.63-.44l.775.205c.285.08.52.275.645.545l1.345 2.89 3.09.49-.63-7.215a.496.496 0 0 1 .625-.525l1.59.43c.47.125.855.475 1.02.935zM3.25 20.285h16.5a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1 0-1.5"/>
  </svg>
));

IconPlaneArrivalFill.displayName = "IconPlaneArrivalFill";
