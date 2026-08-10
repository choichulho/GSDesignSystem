import * as React from "react";

export const IconBank = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M13.25 6.405a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/><path fill="currentColor" fillRule="evenodd" d="M4 17.5h-.25a.749.749 0 1 0 0 1.5h16.5a.749.749 0 1 0 0-1.5H20v-7h1c.55 0 1-.45 1-1v-.67c0-.515-.265-.995-.705-1.27l-8.42-5.28a1.505 1.505 0 0 0-1.75 0l-8.42 5.28C2.265 7.835 2 8.315 2 8.83v.67c0 .55.45 1 1 1h1zm4.835 0H5.5v-7h3.335zm4.835 0h-3.335v-7h3.335zm4.835 0H15.17v-7h3.335zM20.5 9h-17v-.17l8.425-5.28.037-.025L12 3.5a1 1 0 0 0 .075.05L20.5 8.83z" clipRule="evenodd"/><path fill="currentColor" d="M2.75 20.5a.749.749 0 1 0 0 1.5h18.5a.749.749 0 1 0 0-1.5z"/>
  </svg>
));

IconBank.displayName = "IconBank";
