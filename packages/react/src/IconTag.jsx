import * as React from "react";

export const IconTag = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)"><path d="m21.12 11.22-8.34-8.34A3 3 0 0 0 10.66 2H4a2 2 0 0 0-2 2v6.655c0 .795.315 1.56.88 2.12l8.345 8.345a2.996 2.996 0 0 0 4.24 0l5.655-5.655c.545-.545.835-1.25.875-1.965a3 3 0 0 0-.875-2.28m-1.06 3.18-5.655 5.655c-.285.285-.66.44-1.06.44s-.775-.155-1.06-.44L3.94 11.72a1.5 1.5 0 0 1-.44-1.06V4c0-.275.225-.5.5-.5h6.655c.4 0 .775.155 1.06.44l8.345 8.345a1.5 1.5 0 0 1 0 2.12z"/><path d="M7 5.5a1.5 1.5 0 1 0 .002 3A1.5 1.5 0 0 0 7 5.5"/></g><defs><clipPath id="a"><path fill="currentColor" d="M2 2h20v20H2z"/></clipPath></defs>
  </svg>
));

IconTag.displayName = "IconTag";
