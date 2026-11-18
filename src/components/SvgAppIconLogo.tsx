import * as React from "react";

function SvgAppIconLogo(props: any) {
  return (
    <svg
      width="47px"
      height="47px"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 1a13 13 0 110 26 13 13 0 010-26zm0 4a9 9 0 100 18 9 9 0 000-18zm-4 7h9l-3-3 1.5-1.5L23 13l-5.5 5.5L16 17l3-3h-9v-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgAppIconLogo;
