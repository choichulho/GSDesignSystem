import * as React from "react";

export const IconChevronLeftSmall = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M14.53 7.22c.145.145.22.34.22.53s-.075.385-.22.53L10.81 12l3.72 3.72c.165.165.235.38.215.595A.745.745 0 0 1 14 17a.75.75 0 0 1-.53-.22l-4.25-4.25A.75.75 0 0 1 9 12c0-.19.075-.385.22-.53l4.25-4.25a.74.74 0 0 1 .6-.215c.17.015.33.09.46.215"/>
  </svg>
));

IconChevronLeftSmall.displayName = "IconChevronLeftSmall";
