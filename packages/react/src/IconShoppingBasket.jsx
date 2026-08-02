import * as React from "react";

export const IconShoppingBasket = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m6.588 9 3.997-4.765a.747.747 0 0 0-.09-1.055.747.747 0 0 0-1.055.09L4.68 8.945 4.637 9H1.75a.749.749 0 1 0 0 1.5h.538l1.742 9.065A3.004 3.004 0 0 0 6.975 22H17.02c1.44 0 2.675-1.02 2.945-2.435l1.742-9.065h.543a.749.749 0 1 0 0-1.5h-2.887l-.043-.055-4.76-5.675a.747.747 0 0 0-1.055-.09.747.747 0 0 0-.09 1.055L17.413 9zM5.505 19.285 3.815 10.5h16.37l-1.69 8.785A1.5 1.5 0 0 1 17.02 20.5H6.98c-.72 0-1.335-.51-1.475-1.215M12 17.755c.415 0 .75-.335.75-.75v-3.5a.749.749 0 1 0-1.5 0v3.5c0 .415.335.75.75.75m4.75-.75a.749.749 0 1 1-1.5 0v-3.5a.749.749 0 1 1 1.5 0zm-8.75.75c.415 0 .75-.335.75-.75v-3.5a.749.749 0 1 0-1.5 0v3.5c0 .415.335.75.75.75" clipRule="evenodd"/>
  </svg>
));

IconShoppingBasket.displayName = "IconShoppingBasket";
