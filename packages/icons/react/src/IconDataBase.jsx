import * as React from "react";

export const IconDataBase = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M7.75 17.75c.412 0 .75.337.75.75 0 .412-.338.75-.75.75A.753.753 0 0 1 7 18.5c0-.413.338-.75.75-.75m0-6.5c.412 0 .75.338.75.75s-.338.75-.75.75A.753.753 0 0 1 7 12c0-.412.338-.75.75-.75m0-6.5c.412 0 .75.338.75.75s-.338.75-.75.75A.753.753 0 0 1 7 5.5c0-.412.338-.75.75-.75"/><path fill="currentColor" fillRule="evenodd" d="M18.5 1.5A1.5 1.5 0 0 1 20 3v5.5c0 .087-.015.17-.035.25.02.08.035.163.035.25v6c0 .087-.015.17-.035.25.02.08.035.163.035.25V21a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 21v-5.5c0-.087.015-.17.035-.25A1 1 0 0 1 4 15V9c0-.087.015-.17.035-.25A1 1 0 0 1 4 8.5V3a1.5 1.5 0 0 1 1.5-1.5zM5.5 21h13v-5h-13zm0-6.5h13v-5h-13zm0-6.5h13V3h-13z" clipRule="evenodd"/>
  </svg>
));

IconDataBase.displayName = "IconDataBase";
