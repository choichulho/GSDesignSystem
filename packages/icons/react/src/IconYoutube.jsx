import * as React from "react";

export const IconYoutube = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21.8 8.035s-.196-1.379-.794-1.985c-.762-.797-1.614-.8-2.005-.847C16.2 5 12.004 5 12.004 5h-.008s-4.198 0-6.998.203c-.39.047-1.243.05-2.004.847-.6.606-.795 1.985-.795 1.985S2 9.654 2 11.273v1.516c0 1.62.2 3.237.2 3.237s.195 1.38.794 1.986c.76.796 1.76.77 2.206.854 1.6.153 6.8.201 6.8.201s4.202-.005 7-.209c.392-.046 1.244-.05 2.006-.846.598-.607.793-1.986.793-1.986S22 14.408 22 12.79v-1.516c0-1.62-.2-3.238-.2-3.238m-12.5.973v5.62l5.4-2.8z" clipRule="evenodd"/>
  </svg>
));

IconYoutube.displayName = "IconYoutube";
