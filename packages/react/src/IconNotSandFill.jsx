import * as React from "react";

export const IconNotSandFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M5.03 3.415a.745.745 0 0 1 1.06 0l6.72 6.715 1.06 1.054-.11-.109 3.645 3.65H17.4l3.185 3.185a.745.745 0 0 1 0 1.06.745.745 0 0 1-1.06 0l-2.71-2.71-2.095 5.46a1.95 1.95 0 0 1-.73.935c-.3.2-.645.315-.995.34a2 2 0 0 1-1.52-.545 2.1 2.1 0 0 1-.365-.48l-2.86-5.16 4.56-4.56-1.06-1.06-4.56 4.56-5.16-2.86c-.215-.12-.4-.265-.545-.435a1.98 1.98 0 0 1-.48-1.45c.025-.37.155-.745.37-1.04a2 2 0 0 1 .905-.685l5.46-2.096-2.71-2.71a.745.745 0 0 1 0-1.059m13.255-.28a1.98 1.98 0 0 1 2.125.455 1.97 1.97 0 0 1 .455 2.125l-2.28 5.94-6.24-6.24z"/>
  </svg>
));

IconNotSandFill.displayName = "IconNotSandFill";
