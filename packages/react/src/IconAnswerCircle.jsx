import * as React from "react";

export const IconAnswerCircle = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 2c5.523 0 10 4.478 10 10 0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.478 2 12 2m0 1.5c-4.686 0-8.5 3.814-8.5 8.5 0 4.688 3.814 8.5 8.5 8.5 4.687 0 8.5-3.812 8.5-8.5 0-4.686-3.813-8.5-8.5-8.5m-.01 3.268c.65 0 1.046.288 1.292.95l2.87 7.794c.083.226.117.383.117.54 0 .479-.37.814-.882.814-.478 0-.745-.22-.902-.746l-.65-1.887h-3.684l-.65 1.874c-.164.533-.423.759-.881.759-.54 0-.89-.315-.89-.814 0-.137.035-.328.117-.54l2.864-7.787c.24-.656.636-.957 1.279-.957m.013 1.86h-.047l-1.388 4.211h2.837z" clipRule="evenodd"/>
  </svg>
));

IconAnswerCircle.displayName = "IconAnswerCircle";
