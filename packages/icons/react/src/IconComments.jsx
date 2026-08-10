import * as React from "react";

export const IconComments = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.5 2h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8.63l-2.765 2.764a.8.8 0 0 1-1.365-.566V14h-1a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3M15 5c0-.827-.673-1.5-1.5-1.5h-10A1.5 1.5 0 0 0 2 5v6a1.5 1.5 0 0 0 1.5 1.5h2a.5.5 0 0 1 .5.5v1.508l1.569-1.568.293-.293a.5.5 0 0 1 .354-.147H13.5A1.5 1.5 0 0 0 15 11zm3.75 2h1.75a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1v2.198a.8.8 0 0 1-1.366.566L15.37 19H10.5a2.99 2.99 0 0 1-2.386-1.186.756.756 0 0 1 .064-.992l.013-.013c.324-.325.84-.256 1.121.107a1.5 1.5 0 0 0 1.188.584h5.285c.133 0 .26.052.353.146l.293.293L18 19.51V18a.5.5 0 0 1 .5-.5h2A1.5 1.5 0 0 0 22 16v-6a1.5 1.5 0 0 0-1.5-1.5h-1.75a.75.75 0 0 1 0-1.5" clipRule="evenodd"/>
  </svg>
));

IconComments.displayName = "IconComments";
