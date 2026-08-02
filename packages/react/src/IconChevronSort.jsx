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
    <g fill="currentColor" clipPath="url(#a)"><path d="M7.22 8.53c.145.145.34.22.53.22s.385-.075.53-.22L12 4.81l3.72 3.72c.165.165.38.235.595.215A.745.745 0 0 0 17 8a.75.75 0 0 0-.22-.53l-4.25-4.25A.75.75 0 0 0 12 3a.75.75 0 0 0-.53.22L7.22 7.47a.74.74 0 0 0-.215.6c.015.17.09.33.215.46m9.56 6.94a.75.75 0 0 0-.53-.22.75.75 0 0 0-.53.22L12 19.19l-3.72-3.72a.73.73 0 0 0-.595-.215A.745.745 0 0 0 7 16c0 .19.075.385.22.53l4.25 4.25c.145.145.34.22.53.22s.385-.075.53-.22l4.25-4.25a.74.74 0 0 0 .215-.6.76.76 0 0 0-.215-.46"/></g><defs><clipPath id="a"><path fill="currentColor" d="M7 3h10v18H7z"/></clipPath></defs>
  </svg>
));

IconChevronSort.displayName = "IconChevronSort";
