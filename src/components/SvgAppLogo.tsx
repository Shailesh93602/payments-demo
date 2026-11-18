import * as React from "react";

function SvgAppLogo(props: any) {
  return (
    <svg
      width="235px"
      height="28px"
      viewBox="0 0 235 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M14 1a13 13 0 110 26 13 13 0 010-26zm0 4a9 9 0 100 18 9 9 0 000-18zm-4 7h9l-3-3 1.5-1.5L23 13l-5.5 5.5L16 17l3-3h-9v-2z" />
        <text
          x="36"
          y="21"
          fontFamily="Roboto, Helvetica, Arial, sans-serif"
          fontSize="20"
          fontWeight="500"
          letterSpacing="0.5"
        >
          Payments Demo
        </text>
      </g>
    </svg>
  );
}

export default SvgAppLogo;
