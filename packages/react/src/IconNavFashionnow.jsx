import * as React from "react";

export const IconNavFashionnow = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)"><g clipPath="url(#b)"><path fill="currentColor" d="M26 7a8 8 0 0 1 8 8v10a8 8 0 0 1-7.588 7.99L26 33H16l-.412-.01a8 8 0 0 1-7.577-7.578L8 25V15a8 8 0 0 1 8-8zM16 8.5A6.5 6.5 0 0 0 9.5 15v10a6.5 6.5 0 0 0 6.5 6.5h10a6.5 6.5 0 0 0 6.5-6.5V15A6.5 6.5 0 0 0 26 8.5zm10 7.044h-6.848v3.63h5.935v3.044h-5.935V28.5H16v-16h10z"/></g></g><defs><clipPath id="b"><path fill="currentColor" d="M8 15a8 8 0 0 1 8-8h10a8 8 0 0 1 8 8v10a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8z"/></clipPath><filter id="a" width="42" height="42" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation="4"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_11359_31"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_11359_31" result="shape"/></filter></defs>
  </svg>
));

IconNavFashionnow.displayName = "IconNavFashionnow";
