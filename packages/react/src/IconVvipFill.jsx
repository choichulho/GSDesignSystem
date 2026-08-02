import * as React from "react";

export const IconVvipFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M10.63 4.583 9.128 3.51a.304.304 0 0 1 .18-.552l1.845.014.556-1.76a.305.305 0 0 1 .582 0l.556 1.76 1.846-.014a.304.304 0 0 1 .179.552l-1.501 1.073.583 1.75a.304.304 0 0 1-.47.342L12 5.58l-1.485 1.096a.304.304 0 0 1-.469-.341zm10.355 5.894L21 21.497c.001.66-.385 1.215-.918 1.417a.6.6 0 0 1-.306.086H4.314a.3.3 0 0 1-.07-.01l-.033-.006c-.68-.08-1.211-.711-1.21-1.486l.015-11.021c.001-.742.87-1.032 1.24-.414l3.277 5.465 3.95-6.588a.642.642 0 0 1 1.127 0l3.904 6.513 3.232-5.39c.37-.618 1.239-.328 1.24.414" clipRule="evenodd"/>
  </svg>
));

IconVvipFill.displayName = "IconVvipFill";
