import * as React from "react";

export const IconStoreFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m21.85 7.65-1.1-2.75a2.99 2.99 0 0 0-2.8-1.9H5.05c-1.25 0-2.35.75-2.8 1.9l-1.1 2.75Q1 8.025 1 8.4V11c0 .85.65 1.5 1.5 1.5h3V9.75c0-.4.35-.75.75-.75s.75.35.75.75v2.75h3.75V9.75c0-.4.35-.75.75-.75s.75.35.75.75v2.75H16V9.75c0-.4.35-.75.75-.75s.75.35.75.75v2.75h3c.85 0 1.5-.65 1.5-1.5V8.4q0-.375-.15-.75M8.25 14v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5zm-5.5 6v-6h2v6c0 .55-.45 1-1 1s-1-.45-1-1" clipRule="evenodd"/>
  </svg>
));

IconStoreFill.displayName = "IconStoreFill";
