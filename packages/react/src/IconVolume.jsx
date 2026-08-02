import * as React from "react";

export const IconVolume = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m16.5 20.049-4.976-4.645a1.5 1.5 0 0 0-1.024-.403H7a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h3.5c.38 0 .745-.145 1.024-.403L16.5 3.953zM16.994 1.8a.98.98 0 0 0-.677.271L10.5 7.501H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h3.5l5.817 5.43A1 1 0 0 0 18 21.2V2.802A1 1 0 0 0 16.994 1.8" clipRule="evenodd"/>
  </svg>
));

IconVolume.displayName = "IconVolume";
