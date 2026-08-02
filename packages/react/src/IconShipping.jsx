import * as React from "react";

export const IconShipping = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21.998 17.51h-.563a2.5 2.5 0 0 0-4.589 0H16.5v-9h3.494a.5.5 0 0 1 .433.25l2.006 3.476a.5.5 0 0 1 .067.25V13h-1.75a.75.75 0 0 0 0 1.5h1.749l-.001 2.51a.5.5 0 0 1-.5.5M19.14 19.5c-.55 0-1-.448-1-1 0-.55.45-1 1-1a1.001 1.001 0 0 1 0 2m-4.14-2H8.789A2.5 2.5 0 0 0 6.5 16a2.5 2.5 0 0 0-2.288 1.5H3c-.827 0-1.5-.673-1.5-1.5V6c0-.827.673-1.5 1.5-1.5h10.5c.827 0 1.5.673 1.5 1.5zm-8.5 2a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m17.232-8.014L21.726 8.01a2 2 0 0 0-1.732-1H16.5V6a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1.05a2.5 2.5 0 0 0 4.9 0h6.55v.01h1.194a2.5 2.5 0 0 0 4.894 0h.41a2 2 0 0 0 2-1.999L24 12.487c0-.352-.093-.697-.268-1.001" clipRule="evenodd"/>
  </svg>
));

IconShipping.displayName = "IconShipping";
