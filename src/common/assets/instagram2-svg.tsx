import * as React from "react";
import { SVGProps } from "react";
const Instagram2SVG = (props: SVGProps<SVGSVGElement>) => {
  const a = React.useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      {...props}
    >
      <g fill="#1A202C" clipPath={`url(#${a})`}>
        <path d="M9.481.071H3.519C1.579.071 0 1.595 0 3.468v5.755c0 1.873 1.579 3.396 3.519 3.396h5.962c1.94 0 3.519-1.523 3.519-3.396V3.468C13 1.595 11.421.07 9.481.07Zm2.757 9.152c0 1.467-1.237 2.66-2.757 2.66H3.519c-1.52 0-2.757-1.193-2.757-2.66V3.468C.762 2 2 .807 3.52.807h5.962c1.52 0 2.757 1.193 2.757 2.66v5.756Z" />
        <path d="M6.5 2.914c-1.96 0-3.555 1.54-3.555 3.431 0 1.892 1.595 3.431 3.555 3.431 1.96 0 3.555-1.539 3.555-3.43 0-1.893-1.595-3.432-3.555-3.432Zm0 6.127c-1.54 0-2.792-1.21-2.792-2.696C3.708 4.86 4.96 3.65 6.5 3.65c1.54 0 2.792 1.209 2.792 2.695 0 1.487-1.252 2.696-2.792 2.696ZM10.14 1.696c-.58 0-1.05.454-1.05 1.013 0 .56.47 1.014 1.05 1.014.579 0 1.05-.454 1.05-1.014 0-.559-.471-1.013-1.05-1.013Zm0 1.292a.284.284 0 0 1-.289-.279c0-.153.13-.278.289-.278.159 0 .288.125.288.278 0 .154-.13.279-.288.279Z" />
      </g>
      <defs>
        <clipPath id={a}>
          <path fill="#fff" d="M0 .071h13v12.548H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Instagram2SVG;