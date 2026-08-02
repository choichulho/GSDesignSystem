import * as React from "react";

export const IconMoviePlay = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M9.555 11.995c0-.385.415-.63.755-.44l4.43 2.495a.508.508 0 0 1 0 .885l-4.43 2.495a.506.506 0 0 1-.755-.44z"/><path fill="currentColor" fillRule="evenodd" d="M17 3c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4zM4.5 9.5V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5V9.5zm2.5-5A2.5 2.5 0 0 0 4.5 7v1h2.54l2.02-3.5zm3.77 0c-.015.035-.03.075-.05.11L8.765 8h4.27l2.02-3.5zm6.005 0c-.015.035-.03.075-.05.11L14.769 8H19.5V7A2.5 2.5 0 0 0 17 4.5z" clipRule="evenodd"/>
  </svg>
));

IconMoviePlay.displayName = "IconMoviePlay";
