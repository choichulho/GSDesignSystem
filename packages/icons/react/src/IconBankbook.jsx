import * as React from "react";

export const IconBankbook = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M16.612 11.251h1.138a.75.75 0 1 1 0 1.5h-1.54l-.855 3.19a.75.75 0 0 1-.724.555h-.022a.75.75 0 0 1-.693-.492L12 10.74l-1.916 5.264c-.11.3-.39.486-.692.491l-.023.001a.75.75 0 0 1-.724-.554L7.79 12.75H6.25a.75.75 0 0 1 0-1.5h1.138l-.751-2.802a.75.75 0 0 1 1.45-.389l1.396 5.211 1.492-4.1a.75.75 0 0 1 .712-.492l.008.002v-.003h.602v.004l.01-.002.013-.002a.75.75 0 0 1 .705.493l1.492 4.1 1.397-5.21a.75.75 0 1 1 1.449.388z"/><path fill="currentColor" fillRule="evenodd" d="M4 3.5h16c1.65 0 3 1.35 3 3v11c0 1.65-1.35 3-3 3H4c-1.65 0-3-1.35-3-3v-11c0-1.65 1.35-3 3-3m17.5 3c0-.827-.673-1.5-1.5-1.5H4c-.827 0-1.5.673-1.5 1.5v11c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5z" clipRule="evenodd"/>
  </svg>
));

IconBankbook.displayName = "IconBankbook";
