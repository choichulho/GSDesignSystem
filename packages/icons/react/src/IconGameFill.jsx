import * as React from "react";

export const IconGameFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="m22.965 17.56-1.56-8.51C20.88 6.19 18.02 4 14.565 4c-.03 0-.97 0-2.065.005h-1C10.405 4.005 9.46 4 9.435 4c-3.455 0-6.31 2.19-6.84 5.05l-1.56 8.51c-.02.145-.035.29-.035.44 0 1.655 1.345 3 3 3a2.99 2.99 0 0 0 2.5-1.345l2.845-3.66h5.31l2.845 3.66A2.99 2.99 0 0 0 20 21c1.655 0 3-1.345 3-3 0-.15-.015-.3-.035-.44M10.25 10.75h-1v1a.749.749 0 1 1-1.5 0v-1h-1a.749.749 0 1 1 0-1.5h1v-1a.749.749 0 1 1 1.5 0v1h1a.749.749 0 1 1 0 1.5M14.5 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"/>
  </svg>
));

IconGameFill.displayName = "IconGameFill";
