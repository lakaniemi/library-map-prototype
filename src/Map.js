import React from "react";
import { highlightIDs } from "./data";
import { useWindowSize } from "./hooks";

// Regex find:    (id="([a-zA-Z0-9_]*)")
//       replace: $0\nvisibility={getVisibility("$2")}

export const Map = ({ highlight }) => {
  const windowSize = useWindowSize();

  const getVisibility = (elementId) => {
    if (!highlightIDs.includes(elementId)) {
      // To debug:
      // console.log(
      //   `ID not found in list of toggleable highlights, ignoring: ${elementId}`
      // );
      return "visible";
    }

    return highlight === elementId ? "visible" : "hidden";
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      width={`${windowSize.width}px`}
      height={`${windowSize.height}px`}
      viewBox="0 0 4096 2534"
    >
      <path fill="#fff" d="M0 0H4096V2534H0z"></path>
      <path
        fill="#C1FFF0"
        fillRule="nonzero"
        stroke="#4F4F4F"
        strokeOpacity="0"
        strokeWidth="3"
        d="M164.962 2248.82l401.172 1.08 2.1 259.71-545.91-1.68v-427.74h143.057l-.419 168.63z"
      ></path>
      <path
        fill="#C1FFF0"
        d="M2340.89 1133.17l288.97 145.48 44.01-86.6-293.53-143.48-39.45 84.6z"
      ></path>
      <path
        fill="#C1FFF0"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeOpacity="0"
        strokeWidth="4"
        d="M910.667 732.874l-46.353 130.999 229.746 78.263 45.69-126.968-229.083-82.294z"
      ></path>
      <g fill="#FDEC5A" stroke="#4F4F4F" strokeOpacity="0">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeWidth="4"
          d="M2270.15 2309.02v199.28h157.04l-4.1-201.74-152.94 2.46zM2426.37 2308.2l4.1 200.92 159.91.41-3.69-203.79-160.32 2.46zM2588.33 2306.97l4.51 202.96 159.09-2.86-2.87-202.15-160.73 2.05zM2751.06 2304.29l2.66 204.01h199.12l-.82-202.97M3916.45 507.386l-1.64 207.309 159.09 1.312V506.401l-157.45.985z"
        ></path>
        <path
          fillRule="nonzero"
          strokeWidth="3"
          d="M590.219 774.946l-.226-155.591 201.951 71.774-45.576 122.072-156.149-38.255z"
        ></path>
      </g>
      <path
        fill="#FFC79A"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeOpacity="0"
        strokeWidth="2.58"
        d="M1632.3 1817.85l-.11 157.59 437.57 1.63 1.51-159.88-438.97.66z"
        transform="matrix(1.95244 0 0 1 -1554.56 0)"
      ></path>
      <path
        fill="#FFA9A9"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeOpacity="0"
        strokeWidth="4"
        d="M2491.18 1818.84l-1.97 179.43 215.51 1.31-1.31-178.77-212.23-1.97z"
      ></path>
      <path
        fill="#FFA9A9"
        stroke="#323232"
        strokeDasharray="8,8,0,0"
        strokeLinecap="round"
        strokeMiterlimit="3"
        strokeOpacity="0"
        strokeWidth="4"
        d="M2810.86 2082.05l-2.06 124.61 170.57 2.06 1.15-124.84-169.66-1.83z"
      ></path>
      <path
        fill="#FFA9A9"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeOpacity="0"
        strokeWidth="4"
        d="M2954.96 2309.34l.41 198.86 742.96-.41-4.1-198.04-739.27-.41zM2488.95 2002.01l.33 90.86 214.19 1.97.33-93.16-214.85.33zM2488.95 2095.83l-.33 126.61 215.18 1.31-.98-126.28-213.87-1.64z"
      ></path>
      <path
        fill="#B2FFAE"
        stroke="#4F4F4F"
        strokeOpacity="0"
        strokeWidth="3"
        d="M3582.5 1531.5H3836.5V1767.5H3582.5z"
      ></path>
      <path
        fill="#B2FFAE"
        d="M2981.01 1398.34l.51 152.22 166.58.52-4.62-151.2"
      ></path>
      <path
        fill="#B2FFAE"
        fillRule="nonzero"
        stroke="#4F4F4F"
        strokeOpacity="0"
        strokeWidth="3"
        d="M3450.08 1076.15l-94.72-.23.04 76.89-150.79-.33-.66-71.65-111.1-268.102 268.06-110.197 88.53 3.547.64 370.072z"
      ></path>
      <path
        fill="#C1FFF0"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeOpacity="0"
        strokeWidth="4"
        d="M1884.58 492.401l-2.05 93.281 289.58 1.025-1.03-92.256-286.5-2.05z"
      ></path>
      <path
        fill="#C1FFF0"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeOpacity="0"
        strokeWidth="4"
        d="M1927.12 496.501l2.05 90.206 288.55-1.537-.51-86.618-290.09-2.051z"
        transform="translate(1564.25)"
      ></path>
      <g
        fill="#9ED3FF"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeOpacity="0"
        strokeWidth="4"
      >
        <path d="M3909.6 1869.1l166.06.51-2.05-1150.637-158.37-1.538-5.64 1151.665zM3356.18 1077.56l1.19 152.21 481.14.63.64-151.19-238.97-.64-2.56-373.511-147.08 1.282.82 370.949-95.18.27zM3356.72 1319.46v155.68l360.7-1.92-1.92-153.12-358.78-.64z"></path>
      </g>
      <path
        fill="#9ED3FF"
        fillRule="nonzero"
        stroke="#4F4F4F"
        strokeOpacity="0"
        strokeWidth="3"
        d="M2890.58 145.063l497.76.64-1.28 438.431-497.12 206.398.64-645.469zM2272.64 144.422h615.33l-.64 647.656-297.78 122.125-314.99-162.829-1.92-606.952z"
      ></path>
      <path
        fill="#9ED3FF"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeOpacity="0"
        strokeWidth="4"
        d="M1045.78 1790.69l75.58 666.1 181.31 3.84-87.67-690.2-169.22 20.26z"
      ></path>
      <g
        fill="#9ED3FF"
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeOpacity="0"
        strokeWidth="4"
      >
        <path d="M168.449 844.56l.82 295.63 445.289.82-2.05-296.86-444.059.41zM167.951 1226.36l1.64 253.8 271.847-3.28.41-252.17-273.897 1.65M214.805 639.752l1.312 103.654 372.96 1.394V619.742l-212.886-73.477-36.082 97.423-125.304-3.936z"></path>
      </g>
      <g fill="none" stroke="#3C3C3C" strokeWidth="4">
        <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
          <path d="M731.541 972.516v366.624l334.669-3.36-3.36-297.68-193.405-70.63-137.904 5.046zM731.541 1423.23v223.67l237.127 1.68 37.002-223.67-274.129-1.68zM1140.21 817.794l-45.41 126.132-232.082-79.043 45.407-129.495M862.718 864.883l-116.041-50.452 43.725-117.723"></path>
          <path d="M746.677 814.431l-95.861-25.227-62.225-13.454V622.71M168.188 844.43l-.862 297.07h446.89l-.861-298.792-445.167 1.722zM166.465 1225.02l2.584 257.46 272.955-2.59 1.723 28.42 170.489 1.72-.861-287.6-446.89 2.59zM588.591 745.479l-373.35-1.682-3.363 48.297-185.353 2.237M215.241 743.797l-1.681-104.269 154.721 5.045.697 99.916M337.768 643.578l37.24-100.457 97.537 34.645M471.396 576.148l1.091 168.808M279.375 844l-2.077 297.5M390.957 842.626v295.514M501.862 841.248l2.066 296.202M614.833 992.795l-444.307-.689M306.214 1225.55l1.076 254.01M166.292 1338.57l277.691 2.15M443.983 1221.25l-1.076 255.08"></path>
        </g>
        <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
          <path d="M567.828 2504.75l-1.346-255.62-400.93-1.35 1.345-226.03 277.154-1.34-1.346 56.5 102.251 1.35-1.362 170.47M165.552 2079.61H22.939M57.869 2079.61l.441-76.98c47.272 7.83 70.585 33.18 69.656 76.27l-70.097.71M1216.36 1769.99l-171.35 19.81 19.8 168.76 171.35-19.8-19.8-168.77zM1064.81 1958.56l43.05 375.43 12.06 124.85 184.26 2.58-66.3-522.66M1288.46 2337.46l-180.6-3.47M1275.77 2227.21l-176.52 20.67M1261.13 2131.64l-171.35 18.94M1249.08 2030.03l-171.35 18.08"></path>
        </g>
        <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
          <path d="M1510.11 1817.82l121.67.88-.51 157.99h343.08l1.59 247.13-25.81-.92-2.13 286.6"></path>
          <path d="M1545.76 1818.08l.85-57.37c31.84-.2 52.15 17.59 58.41 57.27l-59.26.1zM1976.75 2223.38l728.17 2.45v-407.25l-215.47-1.1-2.66 161.46-512.05-1.65M2487.66 1976.39v247.44M2487.66 2094.88l218.77 2.2M2704.78 2001.19l-214.92-.55M1631.28 1818.03l859.34-1.72M2210.81 2224.83l.65 81.38 57.31.55.56 201.15M2270.43 2307.87l682.23-4.41.55 205.55M2750.41 2304.76l2.76 204.8M2587.3 2306.21l3.86 203.35M2424.18 2306.76l4.96 202.25"></path>
          <path d="M2211.36 2235.67l53.72.22c.55 30.32-14.91 52.3-53.49 59.14l-.23-59.36zM2809.78 2080.69l-.69 126.75 171.53 2.06.68-128.12-171.52-.69"></path>
        </g>
        <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
          <path d="M2955.31 2309.19h740.51l3.44 200.63M3908.28 1866.43l6.73-1360.201 161.45-1.346M3913.98 715.368l160.91 1.329M3913.1 834.848l162.23-.441M3912.22 953.881l164 1.763M3911.77 1075.56l163.12-.88M3913.1 1197.24l162.23.88M3911.33 1315.83l162.68 1.32M3910.89 1437.51l164.88 1.32M3910.01 1559.18l165.32-.44M3910.89 1661.46h164M3909.13 1764.63l165.76 1.32"></path>
          <path d="M3694.95 2313.5v-441.73l377.15-.86M3517.58 1870.05l2.58 353.04h120.55l.86-353.9-123.99.86zM3355.43 1319.6l.86 155.85 360.78-2.58-.86-154.13-360.78.86zM3595.66 1319.03l2.63 154.69M3475.12 1320.46l-.86 152.41M3356.29 1230.91l-.86-154.12 483.91.86-1.72 152.4-481.33.86zM3474.26 1077l3.44 153.7M3594.8 1076.79l4.31 153.26M3715.35 1076.79l5.17 152.4M3450.15 1074.2V705.67l337.53-4.305-.86-115.382M3598.26 703.781l.85 371.279M3598.54 827.947l-146.67-3.451M3600.83 953.654l-149.82-3.444"></path>
          <path d="M3786.91 586.7l-328.07.861.86-278.121-70.6-.861V144.978l-1118.6-1.601-415.02 6.888-41.34-40.469-297.06-2.583.86-72.329"></path>
          <path d="M3915.18 506.938l-31.41.551.55-79.355-49.04-.551-2.21-38.025h-50.15l-1.65 195.081 52.9-1.653v-56.761"></path>
          <path d="M3782.17 478.256l48.15.026 2.2-14.88v24.799M3459.13 494.893l322.88 2.672"></path>
          <path
            strokeDasharray="8,8,0,0"
            d="M3582.65 1531.59l.28 235.23 253.24.57v-236.08l-253.52.28z"
          ></path>
        </g>
        <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
          <path d="M3388.84 305.996l-.86 278.122-797.34 331.507-317.73-162.74-1.73-609.628M2888.56 142.396l-.26 649.47M3451.69 705.527l-91.27-4.306-527.83 218.709v232.48l524.39.87"></path>
          <path d="M3092.24 812.346l111.47 267.744.86 70.6M1882.23 149.628v435.695l324.62 1.722V418.278l-324.62-3.444M2206.85 494.912l-324.62-3.444"></path>
          <path d="M2273.15 363.17l-298.78-.861v46.497M2979.59 1398.15l1.38 152.92 166.7-.69-2.76-150.85-165.32-1.38z"></path>
        </g>
        <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
          <path d="M1954.84 491.569v91.615M2026.59 493.491l.64 90.974M2097.7 493.491l1.93 90.974M2172.02 494.131v89.053M3491.2 497.738l1.92 88.412M3563.59 497.738l1.29 87.771M3636.63 497.738v83.927M3707.74 497.738l1.29 88.412"></path>
        </g>
        <path
          strokeLinecap="square"
          strokeMiterlimit="5"
          d="M2629.55 1278.59l-288.96-143.76"
        ></path>
      </g>
      <path
        fill="none"
        fillRule="nonzero"
        stroke="#000"
        strokeWidth="4"
        d="M1509 1582.5h-308.5v-47l109-662L22.5 419v2090.5h1287l-95-749H1509v749h2566V29.5H624.5V323l1699.86 844.71 55.99-120.13 293.88 143.96-46.32 90.35L2312.5 1412 1509 1535.5v47z"
      ></path>
      <g>
        <text
          x="1662.14"
          y="1926.21"
          fill="#3C3C3C"
          fontFamily="'ArialMT', 'Arial', sans-serif"
          fontSize="78.677"
          transform="matrix(.6101 0 0 .6101 747.645 742.674)"
        >
          KELA
        </text>
        <text
          x="3181.92"
          y="2395.57"
          fill="#3C3C3C"
          fontFamily="'ArialMT', 'Arial', sans-serif"
          fontSize="48"
          transform="translate(-9.595 33.364)"
        >
          MAKERSP
          <tspan x="3413.09px 3445.1px" y="2395.57px 2395.57px">
            AC
          </tspan>
          E
        </text>
        <text
          x="3222.72"
          y="891.139"
          fill="#3C3C3C"
          fontFamily="'ArialMT', 'Arial', sans-serif"
          fontSize="48"
          transform="translate(35.435 38.16)"
        >
          VOX
        </text>
        <text
          x="2084.97"
          y="1871.75"
          fill="#3C3C3C"
          fontFamily="'ArialMT', 'Arial', sans-serif"
          fontSize="48"
          transform="translate(-16.599 45.932)"
        >
          SER
          <tspan x="2182.8px 2214.82px" y="1871.75px 1871.75px">
            VI
          </tspan>
          CE POINT
        </text>
        <text
          x="90.961"
          y="2358.45"
          fill="#3C3C3C"
          fontFamily="'ArialMT', 'Arial', sans-serif"
          fontSize="48"
          transform="translate(51.108 37.48)"
        >
          QUIET
          <tspan
            x="236.766px 247.453px 279.469px"
            y="2358.45px 2358.45px 2358.45px"
          >
            {" "}
            AR
          </tspan>
          EA
        </text>
        <text
          x="2717.63"
          y="1463.33"
          fill="#3C3C3C"
          fontFamily="'ArialMT', 'Arial', sans-serif"
          fontSize="48"
          transform="translate(86.118 27.56)"
        >
          INFO
        </text>
      </g>
      <g>
        <circle
          cx="2490.45"
          cy="1298.77"
          r="50.54"
          fill="red"
          transform="translate(260.726 -.458) translate(-665.796 -367.136) scale(1.26632)"
        ></circle>
        <text
          x="2423"
          y="1181.99"
          fill="#fff"
          fontFamily="'ArialMT', 'Arial', sans-serif"
          fontSize="42"
          transform="translate(260.726 -.458) translate(20.663 110.718)"
        >
          YOU
        </text>
      </g>
      <g>
        <g
          id="wc"
          visibility={getVisibility("wc")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="5"
            strokeWidth="16"
            d="M732.739 1424.04l-.328 149.9 247.327 2.62L1005 1424.69l-272.261-.65z"
          ></path>
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M3695.68 1873l-1.65 145.32 74.79-.99-1.64-65.6 39.37-1.32v-79.05l-110.87 1.64zM1882.95 280.801l-.99 132.192 91.85 1.64 1.64-52.811 227.97.328.66-81.349h-321.13z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2818.03 1278.34l359.6-2.6c57.48-.22 93.13 25.58 102.22 83.05l19.16 381.18c5.95 61.82 31.64 93.55 76.67 95.83l282.52.66c10.61 1.96 43.93-6.94 44.55 21.85"
          ></path>
        </g>
        <g fill="none" stroke="red" strokeLinecap="square">
          <g id="meeting_kari" visibility={getVisibility("meeting_kari")}>
            <path
              strokeMiterlimit="1.5"
              strokeWidth="16"
              d="M2270.15 2309.02v199.28h157.04l-4.1-201.74-152.94 2.46z"
            ></path>
            <path
              strokeDasharray="8,12,0,0"
              strokeMiterlimit="5"
              strokeWidth="4"
              d="M2749.49 1346.12l-1.46 888.36c-5.66 21.32-16.55 30.74-33.13 30.25l-286.95 1.17c-15.21.55-23.49 2.46-24.53 25.47"
            ></path>
          </g>
          <g id="meeting_aalto" visibility={getVisibility("meeting_aalto")}>
            <path
              strokeMiterlimit="1.5"
              strokeWidth="16"
              d="M2426.37 2308.2l4.1 200.92 159.91.41-3.69-203.79-160.32 2.46z"
            ></path>
            <path
              strokeDasharray="8,12,0,0"
              strokeMiterlimit="5"
              strokeWidth="4"
              d="M2749.49 1346.12l-1.46 888.36c-5.66 21.32-16.55 30.74-33.13 30.25l-129.15-.32c-15.22.55-24.61 6.18-25.65 29.19"
            ></path>
          </g>
          <g id="meeting_meri" visibility={getVisibility("meeting_meri")}>
            <path
              strokeMiterlimit="1.5"
              strokeWidth="16"
              d="M2588.33 2306.97l4.51 202.96 159.09-2.86-2.87-202.15-160.73 2.05z"
            ></path>
            <path
              strokeDasharray="8,12,0,0"
              strokeMiterlimit="5"
              strokeWidth="4"
              d="M2748.59 1344.64l6.12 861.69c2.8 41.51-31.72 40.73-31.87 63.72l.37 20.82"
            ></path>
          </g>
          <g id="meeting_luoto" visibility={getVisibility("meeting_luoto")}>
            <path
              strokeMiterlimit="1.5"
              strokeWidth="16"
              d="M2952.02 2305.33l-200.96-1.04 2.66 204.01h199.12l-.82-202.97z"
            ></path>
            <path
              strokeDasharray="8,12,0,0"
              strokeMiterlimit="5"
              strokeWidth="4"
              d="M2748.59 1344.64l6.12 861.69c3.87 18.29 12.76 29.03 28.54 29.45 10.33 5.48 17.22 14.05 15.64 30.25l.38 24.68"
            ></path>
          </g>
          <g id="meeting_kaisla" visibility={getVisibility("meeting_kaisla")}>
            <path
              strokeMiterlimit="1.5"
              strokeWidth="16"
              d="M3916.45 507.386l-1.64 207.309 159.09 1.312V506.401l-157.45.985z"
            ></path>
            <path
              strokeDasharray="8,12,0,0"
              strokeMiterlimit="5"
              strokeWidth="4"
              d="M2818.18 1278.93l1013.7-2.28c28.95-6.21 49.01-19.85 48.41-50.84l-7.75-493.636c1.19-18.839-7.37-42.055 29.43-40.172"
            ></path>
          </g>
          <g
            id="meeting_myrsky"
            visibility={getVisibility("meeting_myrsky")}
            strokeMiterlimit="5"
          >
            <path
              fillRule="nonzero"
              strokeWidth="16"
              d="M590.219 774.946l-.226-155.591 201.951 71.774-45.576 122.072-156.149-38.255z"
            ></path>
            <path
              strokeDasharray="8,12,0,0"
              strokeWidth="4"
              d="M2703.42 1332.28l-204.87 242.8c-27.73 32.41-58.21 48.28-90.51 53.24l-1212.94 35.1c-51.96-8.83-81.93-42.95-87.38-105.29l30.61-467.51c4.82-37.9-9.53-66.22-37.27-87.84L651.639 832.012c-26.608-12.272-25.117-19.234-22.242-33.017"
            ></path>
          </g>
        </g>
        <g
          id="quietArea"
          visibility={getVisibility("quietArea")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            fillRule="nonzero"
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M164.962 2248.82l401.172 1.08 2.1 259.71-545.91-1.68v-427.74h143.057l-.419 168.63z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2700.95 1329.01l-277.38 286.75c-32.14 31.66-60.05 43.65-86.24 41.07l-1192.12 8.54c-37.82-1.45-66.27 10.21-89.2 29.6l-37.29 23.44c-21.504 15.78-49.22 27.6-76.681 27l-672.396 14.16c-112.403-.96-160.393 30.67-160.962 130.59l-2.056 176.44"
          ></path>
        </g>
        <g
          id="servicePoint"
          visibility={getVisibility("servicePoint")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M2033.68 1817.01l.95 157.8 452.98 4.69 2.05-160.6-455.98-1.89z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2698.86 1330.07l-420.14 382.2c-14.48 9.62-19.88 22.26-20.07 36.64l-.74 52.62"
          ></path>
        </g>
        <g
          id="kela"
          visibility={getVisibility("kela")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M1632.3 1817.85l-.11 157.59 410.25-1.63.68-157.07-410.82 1.11z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2697.14 1324.3l-368.49 312.74c-10.53 11.96-25.49 20.76-46.45 25.27l-335.27 14.99c-40.76 2.62-68.7 16.32-76.71 47.23l-5.8 78.42"
          ></path>
        </g>
        <g
          id="popup"
          visibility={getVisibility("popup")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M910.667 733.232l-46.353 130.641 229.746 78.263 45.69-126.968-229.083-81.936z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2698.01 1326.12l-300.18 280.93c-9.9 9.58-27.49 16.83-46.79 16.64l-1162.42 42.9c-45.45-4.09-77.16-20.66-71.38-71.22l107.41-680.187c3.46-28.176-12.65-44.799-27.94-54.962l-48.2-19.666"
          ></path>
        </g>
        <g
          id="kohtaamo"
          visibility={getVisibility("kohtaamo")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M2491.18 1818.84l-1.97 179.43 215.51 1.31-1.31-178.77-212.23-1.97z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2710.85 1337.18l-161.33 183.93c-12.58 13.87-19.07 31.8-19.94 53.47l-2.28 230.41"
          ></path>
        </g>
        <g
          id="paja"
          visibility={getVisibility("paja")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M2954.96 2309.34l.41 198.86 742.96-.41-4.1-198.04-739.27-.41z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2743.21 1346.15l1.82 277.08c7.5 76.39 36.3 92.04 89.95 92.36l222.81 5.87c53.59 4.58 73.98 31.53 75.32 92.08l4.64 481.65"
          ></path>
        </g>
        <g id="stage" visibility={getVisibility("stage")}>
          <path
            fill="none"
            stroke="red"
            strokeLinecap="square"
            strokeMiterlimit="1.5"
            strokeWidth="16.77"
            d="M2789.5 1948.5H3011.5V2241.5H2789.5z"
            transform="matrix(.95222 0 0 .95618 133.274 85.385)"
          ></path>
          <path
            fill="none"
            stroke="red"
            strokeDasharray="8,12,0,0"
            strokeLinecap="square"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2743.57 1347.31l1.67 341.55c-1.22 38.77 16.61 52.66 55.03 53.32l62.93-1.08c31.06 4.02 39.77 20.05 39.96 49.88l-.68 139.86"
          ></path>
        </g>
        <g
          id="studio"
          visibility={getVisibility("studio")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M2488.95 2002.01l.33 90.86 214.19 1.97.33-93.16-214.85.33z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2746.87 1347.71l5.14 650.92c.38 13.35-1.99 20.38-12.56 24.68l-22.91.03"
          ></path>
        </g>
        <g
          id="playingRoom"
          visibility={getVisibility("playingRoom")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M2488.95 2095.83l-.33 126.61 215.18 1.31-.98-126.28-213.87-1.64z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2745.68 1345.08l5.69 873.53c-.31 41.91-9.32 52.22-32.19 52.61l-23.63-.08c-21.25.1-35.48-7.27-35.74-20.28l-.11-12.54"
          ></path>
        </g>
        <g
          id="childrenBooks"
          visibility={getVisibility("childrenBooks")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M3477.5 1861c0-40.01-32.49-72.5-72.5-72.5h-258c-40.01 0-72.5 32.49-72.5 72.5v267c0 40.01 32.49 72.5 72.5 72.5h258c40.01 0 72.5-32.49 72.5-72.5v-267z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2818.46 1283.02l404.42.4c32-.73 49.78 13.65 52.51 44.02l9.02 447.42"
          ></path>
        </g>
        <g
          id="kidsLibraryInfo"
          visibility={getVisibility("kidsLibraryInfo")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M3381.5 1597.5H3512.5V1701.5H3381.5z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2818.19 1279.45l422.89.55c30.65 1.44 48.1 15.12 47.5 45.53l-2.45 275.87c-.12 25.21 12.63 48.33 36.83 48.28l46.82.87"
          ></path>
        </g>
        <path
          id="info"
          visibility={getVisibility("info")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
          strokeMiterlimit="1.5"
          strokeWidth="16"
          d="M2696.5 1404.5H2976.5V1557.5H2696.5z"
          transform="matrix(.8106 0 0 1 557.606 -6.15)"
        ></path>
        <g
          id="kidsPlayground"
          visibility={getVisibility("kidsPlayground")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M3582.5 1531.5H3836.5V1767.5H3582.5z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2816.99 1283.15l422.22 2.92c25.35 6.47 41.24 18.99 42.77 40.69l3.36 164.66c1.36 30.89 11.41 53.33 45.18 52.76l237.95 2.81"
          ></path>
        </g>
        <g
          id="yesBox"
          visibility={getVisibility("yesBox")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M3143.48 1399.88l-162.47-1.54.51 152.22 166.58.52-4.62-151.2z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2818.2 1277.88l219.99-.88c20.78 3.03 34.08 11.91 34.47 31.08l.04 76.15"
          ></path>
        </g>
        <g
          id="VOX"
          visibility={getVisibility("VOX")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            fillRule="nonzero"
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M3450.08 1076.15l-94.72-.23.04 76.89-150.79-.33-.66-71.65-111.1-268.102 268.06-110.197 88.53 3.547.64 370.072z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2817.5 1279.41l418.14-6.7c21.48-1.9 41.06-14.49 41.36-34.24l-.23-69.67"
          ></path>
        </g>
        <g id="elevators" visibility={getVisibility("elevators")}>
          <path
            fill="none"
            stroke="red"
            strokeLinecap="square"
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M1884.58 492.401l-2.05 93.281 289.58 1.025-1.03-92.256-286.5-2.05z"
          ></path>
          <path
            fill="none"
            stroke="red"
            strokeLinecap="square"
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M1927.12 496.501l2.05 90.206 288.55-1.537-.51-86.618-290.09-2.051z"
            transform="translate(1564.25)"
          ></path>
          <path
            fill="none"
            stroke="red"
            strokeDasharray="8,12,0,0"
            strokeLinecap="square"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2744.35 1206.52l-3.59-72.89c-1.95-14.77-8.06-27.02-23.67-33.5L2043.4 788.552c-26.07-12.779-40.13-30.704-40.59-54.458l1.42-132.459"
          ></path>
        </g>
        <path
          id="escalator"
          visibility={getVisibility("escalator")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
          strokeMiterlimit="5"
          strokeWidth="16"
          d="M2380.34 1047.81l-40.3 86.31 289.54 144.34 44.01-86.03-293.25-144.62z"
        ></path>
        <g
          id="childrenHealthCare"
          visibility={getVisibility("childrenHealthCare")}
        >
          <path
            fill="none"
            stroke="red"
            strokeLinecap="square"
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M3909.6 1869.1l166.06.51-2.05-1150.637-158.37-1.538-5.64 1151.665zM3358.01 1080.49l-.64 149.28 481.14.63.64-151.19-238.97-.64-2.56-373.511-144.15 1.282-.65 373.509-94.81.64zM3356.72 1319.46v155.68l360.7-1.92-1.92-153.12-358.78-.64z"
          ></path>
          <path
            fill="none"
            stroke="red"
            strokeDasharray="8,12,0,0"
            strokeLinecap="square"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2819.03 1278.43h935.79c43.65-1.38 60.74 15.6 61.51 50.54l.74 49.29"
          ></path>
          <ellipse
            cx="682.703"
            cy="1183.59"
            fill="red"
            rx="11.547"
            ry="10.975"
            transform="matrix(2.07844 0 0 2.1867 2397.88 -1188.11)"
          ></ellipse>
        </g>
        <g
          id="mehilainenDental"
          visibility={getVisibility("mehilainenDental")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            fillRule="nonzero"
            strokeWidth="16"
            d="M2890.58 145.063l497.76.64-1.28 438.431-497.12 206.398.64-645.469z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2748.73 1206.78l-1.19-250.465c1.18-24.544 11.93-39.953 30.27-48.107l392.78-181.698c25.51-9.797 34.99-32.306 27.1-48.66"
          ></path>
        </g>
        <g
          id="husLabXRay"
          visibility={getVisibility("husLabXRay")}
          fill="none"
          stroke="red"
          strokeLinecap="square"
        >
          <path
            fillRule="nonzero"
            strokeWidth="16"
            d="M2272.64 144.422h615.33l-.64 647.656-297.78 122.125-314.99-162.829-1.92-606.952z"
          ></path>
          <path
            strokeDasharray="8,12,0,0"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2748.05 1207.36l2.26-343.043"
          ></path>
        </g>
        <g
          id="mentalHealthCenter"
          visibility={getVisibility("mentalHealthCenter")}
        >
          <path
            fill="none"
            stroke="red"
            strokeLinecap="square"
            strokeMiterlimit="5"
            strokeWidth="16"
            d="M1044.97 1790.63l76.39 666.16 181.31 3.84-87-689.7-170.7 19.7z"
          ></path>
          <path
            fill="none"
            stroke="red"
            strokeDasharray="8,12,0,0"
            strokeLinecap="square"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2698.56 1327.74l-323.34 279.49c-36.59 28.29-35.88 28.4-100.73 34.54l-1224.63 26.66c-51.819 8.93-84.852 30.77-84.272 87.34l43.922 358.6"
          ></path>
          <ellipse
            cx="682.703"
            cy="1183.59"
            fill="red"
            rx="11.547"
            ry="10.975"
            transform="matrix(2.07844 0 0 2.1867 -407.034 -452.43)"
          ></ellipse>
        </g>
        <g id="healthCareCenter" visibility={getVisibility("healthCareCenter")}>
          <path
            fill="none"
            stroke="red"
            strokeLinecap="square"
            strokeMiterlimit="1.5"
            strokeWidth="16"
            d="M168.449 844.56l.82 295.63 445.289.82-2.05-296.86-444.059.41zM167.951 1226.36l1.64 253.8 271.847-3.28.41-252.17-273.897 1.65M214.805 639.752l1.312 103.654 372.96 1.394V619.742l-212.886-73.477-36.082 97.423-125.304-3.936z"
          ></path>
          <path
            fill="none"
            stroke="red"
            strokeDasharray="8,12,0,0"
            strokeLinecap="square"
            strokeMiterlimit="5"
            strokeWidth="4"
            d="M2693.61 1322.89l-352.96 293.58c-57.63 45.93-58.68 46.82-170.07 53.09l-1434.865 22.11c-35.904-.74-53.168-17.78-52.511-44.36l-2.235-447.33"
          ></path>
          <ellipse
            cx="682.703"
            cy="1183.59"
            fill="red"
            rx="11.547"
            ry="10.975"
            transform="matrix(2.07844 0 0 2.1867 -737.524 -1406.12)"
          ></ellipse>
        </g>
      </g>
    </svg>
  );
};
