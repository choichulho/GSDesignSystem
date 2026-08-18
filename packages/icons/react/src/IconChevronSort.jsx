import * as React from "react";

export const IconChevronSort = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M16.25 15.25c.19 0 .385.075.53.22.125.13.2.29.215.46a.75.75 0 0 1-.215.6l-4.25 4.25A.76.76 0 0 1 12 21a.76.76 0 0 1-.53-.22l-4.25-4.25A.76.76 0 0 1 7 16a.745.745 0 0 1 .685-.745c.215-.02.43.05.595.215L12 19.19l3.72-3.72a.76.76 0 0 1 .53-.22M12 3c.19 0 .385.075.53.22l4.25 4.25c.145.145.22.34.22.53s-.075.385-.22.53c-.13.13-.296.2-.466.215a.74.74 0 0 1-.594-.215L12 4.81 8.28 8.53a.76.76 0 0 1-.53.22.76.76 0 0 1-.53-.22.76.76 0 0 1-.215-.46.75.75 0 0 1 .215-.6l4.25-4.25A.76.76 0 0 1 12 3"/>
  </svg>
));

IconChevronSort.displayName = "IconChevronSort";
