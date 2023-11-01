import * as React from "react";
import { SVGProps } from "react";
const GearSVG = (props: SVGProps<SVGSVGElement>) => {
  const a = React.useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={45}
      fill="none"
      viewBox="0 0 45 45"
      aria-labelledby="app-maintenance"
      {...props}
    >
      <g clipPath={`url(#${a})`}>
        <path
          fill="#4252DF"
          d="M22.5 45a4.223 4.223 0 0 1-4.219-4.219c0-1.12-.685-2.102-1.747-2.503-.326-.122-.65-.256-.97-.4-1.037-.467-2.218-.257-3.008.532a4.222 4.222 0 0 1-5.966 0 4.192 4.192 0 0 1-1.236-2.983c0-1.127.44-2.187 1.236-2.984.789-.789.997-1.97.53-3.01a17.35 17.35 0 0 1-.398-.964 2.661 2.661 0 0 0-2.503-1.75A4.223 4.223 0 0 1 0 22.5a4.223 4.223 0 0 1 4.219-4.219 2.66 2.66 0 0 0 2.502-1.746c.125-.33.257-.65.4-.967.466-1.04.258-2.222-.53-3.012a4.192 4.192 0 0 1-1.237-2.983c0-1.127.44-2.186 1.236-2.983a4.223 4.223 0 0 1 5.966 0c.79.79 1.972 1 3.01.53.317-.142.64-.276.968-.4a2.658 2.658 0 0 0 1.747-2.501A4.223 4.223 0 0 1 22.5 0a4.223 4.223 0 0 1 4.219 4.219c0 1.12.685 2.102 1.747 2.501.328.124.65.258.97.401 1.037.466 2.218.26 3.008-.53a4.222 4.222 0 0 1 5.966 0 4.192 4.192 0 0 1 1.236 2.982c0 1.127-.44 2.186-1.236 2.984-.789.789-.997 1.97-.53 3.01.142.317.274.638.398.964a2.661 2.661 0 0 0 2.503 1.75A4.223 4.223 0 0 1 45 22.5a4.223 4.223 0 0 1-4.219 4.219 2.66 2.66 0 0 0-2.502 1.746c-.125.33-.257.65-.4.967-.466 1.04-.258 2.222.53 3.012a4.192 4.192 0 0 1 1.236 2.983c0 1.127-.439 2.186-1.235 2.983a4.223 4.223 0 0 1-5.966 0c-.79-.79-1.972-.999-3.01-.53-.319.142-.642.276-.971.4a2.66 2.66 0 0 0-1.744 2.501A4.223 4.223 0 0 1 22.5 45Zm-8.078-10.184a5.6 5.6 0 0 1 2.298.498c.264.12.531.23.803.332 2.137.805 3.57 2.869 3.57 5.135a1.408 1.408 0 0 0 2.812 0c.001-2.266 1.435-4.33 3.57-5.134.274-.103.541-.213.804-.332 2.116-.953 4.529-.518 6.153 1.106a1.408 1.408 0 0 0 2.401-.994c0-.376-.145-.729-.412-.994-1.623-1.624-2.057-4.039-1.107-6.153.118-.264.23-.535.335-.81.802-2.13 2.865-3.564 5.132-3.564.776 0 1.407-.63 1.407-1.406 0-.775-.63-1.406-1.407-1.406-2.267 0-4.33-1.434-5.133-3.569-.103-.27-.216-.54-.334-.807-.95-2.112-.516-4.527 1.107-6.15.267-.266.412-.62.412-.995s-.145-.728-.412-.993a1.407 1.407 0 0 0-1.989-.001c-1.623 1.624-4.04 2.057-6.152 1.107-.265-.12-.533-.23-.806-.333-2.134-.804-3.568-2.867-3.568-5.134 0-.775-.63-1.407-1.406-1.407-.776 0-1.406.632-1.406 1.407 0 2.267-1.434 4.33-3.568 5.134-.273.102-.541.213-.805.332-2.117.951-4.53.517-6.153-1.106a1.408 1.408 0 0 0-2.401.994c0 .376.146.729.412.994 1.623 1.624 2.057 4.039 1.107 6.153-.118.264-.23.535-.335.81-.802 2.13-2.865 3.564-5.132 3.564-.776 0-1.407.63-1.407 1.406 0 .775.63 1.406 1.407 1.406 2.267 0 4.33 1.434 5.133 3.569.103.27.216.54.334.807.95 2.112.516 4.527-1.107 6.15a1.394 1.394 0 0 0-.412.995 1.407 1.407 0 0 0 2.4.994 5.433 5.433 0 0 1 3.855-1.605Zm8.078-3.879c-4.653 0-8.438-3.784-8.438-8.437s3.785-8.438 8.438-8.438c4.653 0 8.438 3.785 8.438 8.438 0 4.653-3.785 8.438-8.438 8.438Zm0-14.062a5.631 5.631 0 0 0-5.625 5.625 5.631 5.631 0 0 0 5.625 5.625 5.631 5.631 0 0 0 5.625-5.625 5.631 5.631 0 0 0-5.625-5.625Z"
        />
      </g>
      <defs>
        <clipPath id={a}>
          <path fill="#fff" d="M0 0h45v45H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default GearSVG;