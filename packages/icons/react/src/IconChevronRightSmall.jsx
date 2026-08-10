import * as React from "react";

export const IconChevronRightSmall = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M9.22 7.22a.75.75 0 0 0-.22.53c0 .19.075.385.22.53L12.94 12l-3.72 3.72a.73.73 0 0 0-.215.595.745.745 0 0 0 .745.685c.19 0 .385-.075.53-.22l4.25-4.25a.75.75 0 0 0 .22-.53.75.75 0 0 0-.22-.53l-4.25-4.25a.77.77 0 0 0-.6-.22.76.76 0 0 0-.46.215z"/>
  </svg>
));

IconChevronRightSmall.displayName = "IconChevronRightSmall";
