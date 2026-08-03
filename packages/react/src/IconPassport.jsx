import * as React from "react";

export const IconPassport = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M15.25 18.5a.749.749 0 1 1 0 1.5h-6.5a.749.749 0 1 1 0-1.5z"/><path fill="currentColor" fillRule="evenodd" d="M12 4.5c3.04 0 5.5 2.46 5.5 5.5s-2.46 5.5-5.5 5.5-5.5-2.46-5.5-5.5S8.96 4.5 12 4.5m-.98 6.25c.125 1.755.65 2.845.975 3.18.325-.336.855-1.43.975-3.18zm-2.945 0a4 4 0 0 0 2 2.755c-.285-.77-.48-1.72-.545-2.755zm6.395 0c-.065 1.04-.255 1.985-.545 2.755a4 4 0 0 0 2-2.755zm-4.395-4.255a4.02 4.02 0 0 0-2 2.755H9.53c.065-1.04.255-1.985.545-2.755M12 6.07c-.325.335-.855 1.43-.975 3.18h1.95c-.125-1.755-.65-2.844-.975-3.18m1.925.425c.285.77.48 1.72.545 2.755h1.455a4 4 0 0 0-2-2.755" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18 .5c1.655 0 3 1.345 3 3v17c0 1.655-1.345 3-3 3H6c-1.655 0-3-1.345-3-3v-17c0-1.655 1.345-3 3-3zM6 2c-.825 0-1.5.675-1.5 1.5v17c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-17c0-.825-.675-1.5-1.5-1.5z" clipRule="evenodd"/>
  </svg>
));

IconPassport.displayName = "IconPassport";
