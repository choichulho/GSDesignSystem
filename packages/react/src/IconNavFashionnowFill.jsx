import * as React from "react";

export const IconNavFashionnowFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)"><g fill="currentColor" clipPath="url(#b)"><path d="M16 33h10l.412-.01A8 8 0 0 0 34 25V15a8 8 0 0 0-8-8H16a8 8 0 0 0-8 8v10l.01.412a8 8 0 0 0 7.578 7.577z"/><path d="M16 12.5h10v3.044h-6.848v3.63h5.935v3.043h-5.935V28.5H16z"/></g></g><defs><clipPath id="b"><path fill="currentColor" d="M8 15a8 8 0 0 1 8-8h10a8 8 0 0 1 8 8v10a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8z"/></clipPath><filter id="a" width="42" height="42" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation="4"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_11359_30"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_11359_30" result="shape"/></filter></defs>
  </svg>
));

IconNavFashionnowFill.displayName = "IconNavFashionnowFill";
