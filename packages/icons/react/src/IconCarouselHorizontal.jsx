import * as React from "react";

export const IconCarouselHorizontal = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16 18a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 8 18V6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5zm-.5-14h-7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M3 6H1.75a.75.75 0 0 0 0 1.5H3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1.75a.75.75 0 0 0 0 1.5H3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m18 10.5h1.25a.75.75 0 0 1 0 1.5H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.25a.75.75 0 0 1 0 1.5H21a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5" clipRule="evenodd"/>
  </svg>
));

IconCarouselHorizontal.displayName = "IconCarouselHorizontal";
