import * as React from "react";

export const IconFastForwardFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)"><path d="M12.425 11.18 3.72 6.155c-.285-.165-.6-.19-.88-.11-.465.13-.84.55-.84 1.105V17.2c0 .44.24.8.575.995s.765.22 1.145 0l8.705-5.025c.38-.22.575-.605.575-.995s-.19-.77-.575-.995m11 0L14.72 6.155a1.13 1.13 0 0 0-.99-.075c-.415.165-.73.56-.73 1.07V17.2c0 .55.375.975.84 1.105.28.08.595.055.88-.115l8.705-5.025c.38-.22.575-.605.575-.995s-.19-.77-.575-.995z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M2 6h22v12.35H2z"/></clipPath></defs>
  </svg>
));

IconFastForwardFill.displayName = "IconFastForwardFill";
