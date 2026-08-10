import * as React from "react";

export const IconAiAlt2Fill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M11.07 3.725c.24-.97 1.62-.97 1.86 0l1.005 4.01a3.2 3.2 0 0 0 2.33 2.33l4.01 1.005c.97.24.97 1.62 0 1.86l-4.01 1.005a3.2 3.2 0 0 0-2.33 2.33l-1.005 4.01c-.24.97-1.62.97-1.86 0l-1.005-4.01a3.2 3.2 0 0 0-2.33-2.33l-4.01-1.005c-.97-.24-.97-1.62 0-1.86l4.01-1.005a3.2 3.2 0 0 0 2.33-2.33zm7.68-.72c.2 0 .37.135.42.325l.16.645c.09.345.355.615.7.7l.645.16a.434.434 0 0 1 0 .84l-.645.16a.97.97 0 0 0-.7.7l-.16.645a.435.435 0 0 1-.84 0l-.16-.645a.97.97 0 0 0-.7-.7l-.645-.16a.434.434 0 0 1 0-.84l.645-.16a.97.97 0 0 0 .7-.7l.16-.645c.05-.19.22-.324.42-.325"/>
  </svg>
));

IconAiAlt2Fill.displayName = "IconAiAlt2Fill";
