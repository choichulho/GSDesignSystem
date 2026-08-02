import * as React from "react";

export const IconRestockNotification = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12.5 6.5h-3v-3h3zM5 18.5h1.75a.75.75 0 0 1 0 1.5H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2.25a.75.75 0 0 1-1.5 0V5A1.5 1.5 0 0 0 17 3.5h-3v3A1.5 1.5 0 0 1 12.5 8h-3A1.5 1.5 0 0 1 8 6.5v-3H5A1.5 1.5 0 0 0 3.5 5v12A1.5 1.5 0 0 0 5 18.5m8.52-.625-.717.716h7.485l-.708-.708a1.5 1.5 0 0 1-.44-1.06v-1.914a2.58 2.58 0 0 0-2.33-2.578 1.5 1.5 0 0 1-.26-.049q-.127.035-.262.05a2.58 2.58 0 0 0-2.33 2.577v1.905a1.5 1.5 0 0 1-.439 1.06m7.12-1.053.88.88c.308.308.48.724.48 1.157V19c0 .603-.488 1.092-1.09 1.092h-2.452A1.91 1.91 0 0 1 16.55 22l-.025-.003-.024.003q-.167-.002-.326-.038a1.91 1.91 0 0 1-1.534-1.871h-2.458A1.09 1.09 0 0 1 11.09 19v-.14c0-.434.172-.85.48-1.157l.887-.889V14.91a4.09 4.09 0 0 1 3.337-4.02v-.14a.75.75 0 0 1 .75-.75h.004l.002.001h.002a.75.75 0 0 1 .742.75v.139a4.09 4.09 0 0 1 3.345 4.02z" clipRule="evenodd"/>
  </svg>
));

IconRestockNotification.displayName = "IconRestockNotification";
