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
        fill="none"
        stroke="#000"
        strokeWidth="4"
        d="M1509 1582.5h-308.5v-47l109-662L22.5 419v2090.5h1287l-95-749H1509v749h2566V29.5H624.5V323l1688 847.5V1412L1509 1535.5v47z"
      ></path>
      <g opacity="0.2">
        <path
          fill="#FED863"
          fillRule="nonzero"
          d="M164.962 2248.82l401.172 1.08 2.1 259.71-545.91-1.68v-427.74h143.057l-.419 168.63z"
        ></path>
        <g fill="#F5DB02">
          <path d="M2270.15 2309.02v199.28h157.04l-4.1-201.74-152.94 2.46zM1046.44 1790.94l20.09 166.88 170.16-20.09-22.14-167.7-168.11 20.91zM2426.37 2308.2l4.1 200.92 159.91.41-3.69-203.79-160.32 2.46zM2588.33 2306.97l4.51 202.96 159.09-2.86-2.87-202.15-160.73 2.05zM2751.06 2304.29l2.66 204.01h199.12l-.82-202.97M3916.45 507.386l-1.64 207.309 159.09 1.312V506.401l-157.45.985z"></path>
          <path
            fillRule="nonzero"
            d="M590.219 774.946l-.226-155.591 201.951 71.774-45.576 122.072-156.149-38.255z"
          ></path>
        </g>
        <path
          fill="#FFB574"
          d="M2069.26 1817.01l1.65 159.89 415.79-.64 1.93-158.88-419.37-.37z"
        ></path>
        <path
          fill="#FFB574"
          d="M1632.3 1817.85l-.11 157.59 438.86 1.86-1.42-160.56-437.33 1.11z"
        ></path>
        <path
          fill="#FED863"
          d="M910.667 732.874l-46.353 130.999 229.746 78.263 45.69-126.968-229.083-82.294z"
        ></path>
        <path
          fill="#FFB574"
          d="M2491.18 1818.84l-1.97 179.43 215.51 1.31-1.31-178.77-212.23-1.97z"
        ></path>
        <path
          fill="#FF7E7E"
          d="M2954.96 2309.34l.41 198.86 742.96-.41-4.1-198.04-739.27-.41zM2488.95 2002.01l.33 90.86 214.19 1.97.33-93.16-214.85.33zM2488.95 2095.83l-.33 126.61 215.18 1.31-.98-126.28-213.87-1.64z"
        ></path>
        <path fill="#2D9CDB" d="M3582.5 1531.5H3836.5V1767.5H3582.5z"></path>
        <path
          fill="#24BD66"
          d="M2981.01 1398.34l.51 152.22 166.58.52-4.62-151.2"
        ></path>
        <path
          fill="#24BD66"
          fillRule="nonzero"
          d="M3450.08 1076.15l-94.72-.23.04 76.89-150.79-.33-.66-71.65-111.1-268.102 268.06-110.197 88.53 3.547.64 370.072z"
        ></path>
        <path
          fill="#CB731C"
          d="M1884.58 492.401l-2.05 93.281 289.58 1.025-1.03-92.256-286.5-2.05z"
        ></path>
        <path
          fill="#CB731C"
          d="M1927.12 496.501l2.05 90.206 288.55-1.537-.51-86.618-290.09-2.051z"
          transform="translate(1564.25)"
        ></path>
        <g fill="#CB3CFF">
          <path d="M3909.6 1869.1l166.06.51-2.05-1150.637-158.37-1.538-5.64 1151.665zM3358.01 1080.49l-.64 149.28 481.14.63.64-151.19-238.97-.64-2.56-373.511-144.15 1.282-.65 373.509-94.81.64zM3356.72 1319.46v155.68l360.7-1.92-1.92-153.12-358.78-.64z"></path>
        </g>
        <path
          fill="#CB3CFF"
          fillRule="nonzero"
          d="M2890.58 145.063l497.76.64-1.28 438.431-497.12 206.398.64-645.469zM2272.64 144.422h615.33l-.64 647.656-297.78 122.125-314.99-162.829-1.92-606.952z"
        ></path>
        <path
          fill="#CB3CFF"
          d="M1064.98 1957.84l56.38 498.95 181.31 3.84-66.63-522.14-171.06 19.35z"
        ></path>
        <g fill="#CB3CFF">
          <path d="M168.449 844.56l.82 295.63 445.289.82-2.05-296.86-444.059.41zM167.951 1226.36l1.64 253.8 271.847-3.28.41-252.17-273.897 1.65M214.805 639.752l1.312 103.654 372.96 1.394V619.742l-212.886-73.477-36.082 97.423-125.304-3.936z"></path>
        </g>
      </g>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeWidth="4"
        opacity="0.7"
      >
        <path d="M731.541 972.516v366.624l334.669-3.36-3.36-297.68-193.405-70.63-137.904 5.046zM731.541 1423.23v223.67l237.127 1.68 37.002-223.67-274.129-1.68zM1140.21 817.794l-45.41 126.132-232.082-79.043 45.407-129.495M862.718 864.883l-116.041-50.452 43.725-117.723"></path>
        <path d="M746.677 814.431l-95.861-25.227-62.225-13.454V622.71M168.188 844.43l-.862 297.07h446.89l-.861-298.792-445.167 1.722zM166.465 1225.02l2.584 257.46 272.955-2.59 1.723 28.42 170.489 1.72-.861-287.6-446.89 2.59zM588.591 745.479l-373.35-1.682-3.363 48.297-185.353 2.237M215.241 743.797l-1.681-104.269 154.721 5.045.697 99.916M337.768 643.578l37.24-100.457 97.537 34.645M471.396 576.148l1.091 168.808M279.375 844l-2.077 297.5M390.957 842.626v295.514M501.862 841.248l2.066 296.202M614.833 992.795l-444.307-.689M306.214 1225.55l1.076 254.01M166.292 1338.57l277.691 2.15M443.983 1221.25l-1.076 255.08"></path>
        <g>
          <path d="M567.828 2504.75l-1.346-255.62-400.93-1.35 1.345-226.03 277.154-1.34-1.346 56.5 102.251 1.35-1.362 170.47M165.552 2079.61H22.939M57.869 2079.61l.441-76.98c47.272 7.83 70.585 33.18 69.656 76.27l-70.097.71M1216.36 1769.99l-171.35 19.81 19.8 168.76 171.35-19.8-19.8-168.77zM1064.81 1958.56l43.05 375.43 12.06 124.85 184.26 2.58-66.3-522.66M1288.46 2337.46l-180.6-3.47M1275.77 2227.21l-176.52 20.67M1261.13 2131.64l-171.35 18.94M1249.08 2030.03l-171.35 18.08"></path>
        </g>
        <g>
          <path d="M1510.11 1817.82l121.67.88-.51 157.99h343.08l1.59 247.13-25.81-.92-2.13 286.6"></path>
          <path d="M1545.76 1818.08l.85-57.37c31.84-.2 52.15 17.59 58.41 57.27l-59.26.1zM1976.75 2223.38l728.17 2.45v-407.25l-215.47-1.1-2.66 161.46-512.05-1.65M2487.66 1976.39v247.44M2487.66 2094.88l218.77 2.2M2704.78 2001.19l-214.92-.55M1631.28 1818.03l859.34-1.72M2210.81 2224.83l.65 81.38 57.31.55.56 201.15M2270.43 2307.87l682.23-4.41.55 205.55M2750.41 2304.76l2.76 204.8M2587.3 2306.21l3.86 203.35M2424.18 2306.76l4.96 202.25"></path>
          <path d="M2211.36 2235.67l53.72.22c.55 30.32-14.91 52.3-53.49 59.14l-.23-59.36zM2809.78 2080.69l-.69 126.75 171.53 2.06.68-128.12-171.52-.69"></path>
        </g>
        <g>
          <path d="M2955.31 2309.19h740.51l3.44 200.63M3908.28 1866.43l6.73-1360.201 161.45-1.346M3913.98 715.368l160.91 1.329M3913.1 834.848l162.23-.441M3912.22 953.881l164 1.763M3911.77 1075.56l163.12-.88M3913.1 1197.24l162.23.88M3911.33 1315.83l162.68 1.32M3910.89 1437.51l164.88 1.32M3910.01 1559.18l165.32-.44M3910.89 1661.46h164M3909.13 1764.63l165.76 1.32"></path>
          <path d="M3694.95 2313.5v-441.73l377.15-.86M3517.58 1870.05l2.58 353.04h120.55l.86-353.9-123.99.86zM3355.43 1319.6l.86 155.85 360.78-2.58-.86-154.13-360.78.86zM3595.66 1319.03l2.63 154.69M3475.12 1320.46l-.86 152.41M3356.29 1230.91l-.86-154.12 483.91.86-1.72 152.4-481.33.86zM3474.26 1077l3.44 153.7M3594.8 1076.79l4.31 153.26M3715.35 1076.79l5.17 152.4M3450.15 1074.2V705.67l337.53-4.305-.86-115.382M3598.26 703.781l.85 371.279M3598.54 827.947l-146.67-3.451M3600.83 953.654l-149.82-3.444"></path>
          <path d="M3786.91 586.7l-328.07.861.86-278.121-70.6-.861V144.978l-1118.6-1.601-415.02 6.888-41.34-40.469-297.06-2.583.86-72.329"></path>
          <path d="M3915.18 506.938l-31.41.551.55-79.355-49.04-.551-2.21-38.025h-50.15l-1.65 195.081 52.9-1.653v-56.761"></path>
          <path d="M3782.17 478.256l48.15.026 2.2-14.88v24.799M3459.13 494.893l322.88 2.672"></path>
        </g>
        <g>
          <path d="M3388.84 305.996l-.86 278.122-797.34 331.507-317.73-162.74-1.73-609.628M2888.56 142.396l-.26 649.47M3451.69 705.527l-91.27-4.306-527.83 218.709v232.48l524.39.87"></path>
          <path d="M3092.24 812.346l111.47 267.744.86 70.6M1882.23 149.628v435.695l324.62 1.722V418.278l-324.62-3.444M2206.85 494.912l-324.62-3.444"></path>
          <path d="M2273.15 363.17l-298.78-.861v46.497M2979.59 1398.15l1.38 152.92 166.7-.69-2.76-150.85-165.32-1.38z"></path>
        </g>
        <g>
          <path d="M1954.84 491.569v91.615M2026.59 493.491l.64 90.974M2097.7 493.491l1.93 90.974M2172.02 494.131v89.053M3491.2 497.738l1.92 88.412M3563.59 497.738l1.29 87.771M3636.63 497.738v83.927M3707.74 497.738l1.29 88.412"></path>
        </g>
      </g>
      <text
        x="1662.14"
        y="1926.21"
        fill="gray"
        fontFamily="'ArialMT', 'Arial', sans-serif"
        fontSize="100.62"
        transform="matrix(.6101 0 0 .6101 697.404 740.58)"
      >
        KELA
      </text>
      <text
        x="2084.97"
        y="1871.75"
        fill="gray"
        fontFamily="'ArialMT', 'Arial', sans-serif"
        fontSize="61.387"
        transform="translate(-16.017 43.838)"
      >
        Service point
      </text>
      <text
        x="2717.63"
        y="1463.33"
        fill="gray"
        fontFamily="'ArialMT', 'Arial', sans-serif"
        fontSize="61.387"
        transform="translate(25.415 35.236)"
      >
        INFO
      </text>
      <g>
        <g
          id="wc"
          visibility={getVisibility("wc")}
          fill="#CD1414"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
        >
          <path d="M732.739 1424.04l-.328 149.9 247.327 2.62L1005 1424.69l-272.261-.65zM3695.68 1873l-1.65 145.32 74.79-.99-1.64-65.6 39.37-1.32v-79.05l-110.87 1.64zM1882.95 280.801l-.99 132.192 91.85 1.64 1.64-52.811 227.97.328.66-81.349h-321.13z"></path>
        </g>
        <g fill="#F5DB02" stroke="#4F4F4F" strokeOpacity="0">
          <path
            id="meeting_kari"
            visibility={getVisibility("meeting_kari")}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="4"
            d="M2270.15 2309.02v199.28h157.04l-4.1-201.74-152.94 2.46z"
          ></path>
          <path
            id="meeting_b31"
            visibility={getVisibility("meeting_b31")}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="4"
            d="M1046.44 1790.94l20.09 166.88 170.16-20.09-22.14-167.7-168.11 20.91z"
          ></path>
          <path
            id="meeting_aalto"
            visibility={getVisibility("meeting_aalto")}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="4"
            d="M2426.37 2308.2l4.1 200.92 159.91.41-3.69-203.79-160.32 2.46z"
          ></path>
          <path
            id="meeting_meri"
            visibility={getVisibility("meeting_meri")}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="4"
            d="M2588.33 2306.97l4.51 202.96 159.09-2.86-2.87-202.15-160.73 2.05z"
          ></path>
          <path
            id="meeting_luoto"
            visibility={getVisibility("meeting_luoto")}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="4"
            d="M2751.06 2304.29l2.66 204.01h199.12l-.82-202.97"
          ></path>
          <path
            id="meeting_kaisla"
            visibility={getVisibility("meeting_kaisla")}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="4"
            d="M3916.45 507.386l-1.64 207.309 159.09 1.312V506.401l-157.45.985z"
          ></path>
          <path
            id="meeting_myrsky"
            visibility={getVisibility("meeting_myrsky")}
            fillRule="nonzero"
            strokeWidth="3"
            d="M590.219 774.946l-.226-155.591 201.951 71.774-45.576 122.072-156.149-38.255z"
          ></path>
        </g>
        <path
          id="quietArea"
          visibility={getVisibility("quietArea")}
          fill="#FED863"
          fillRule="nonzero"
          stroke="#4F4F4F"
          strokeOpacity="0"
          strokeWidth="3"
          d="M164.962 2248.82l401.172 1.08 2.1 259.71-545.91-1.68v-427.74h143.057l-.419 168.63z"
        ></path>
        <path
          id="servicePoint"
          visibility={getVisibility("servicePoint")}
          fill="#FFB574"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
          d="M2069.26 1817.01l1.65 159.89 415.79-.64 1.93-158.88-419.37-.37z"
        ></path>
        <path
          id="kela"
          visibility={getVisibility("kela")}
          fill="#FFB574"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
          d="M1632.3 1817.85l-.11 157.59 438.86 1.86-1.42-160.56-437.33 1.11z"
        ></path>
        <path
          id="popup"
          visibility={getVisibility("popup")}
          fill="#FED863"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
          d="M910.667 732.874l-46.353 130.999 229.746 78.263 45.69-126.968-229.083-82.294z"
        ></path>
        <path
          id="kohtaamo"
          visibility={getVisibility("kohtaamo")}
          fill="#FFB574"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
          d="M2491.18 1818.84l-1.97 179.43 215.51 1.31-1.31-178.77-212.23-1.97z"
        ></path>
        <path
          id="paja"
          visibility={getVisibility("paja")}
          fill="#FF7E7E"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
          d="M2954.96 2309.34l.41 198.86 742.96-.41-4.1-198.04-739.27-.41z"
        ></path>
        <path
          id="stage"
          visibility={getVisibility("stage")}
          fill="#FF7E7E"
          stroke="#4F4F4F"
          strokeOpacity="0"
          strokeWidth="3"
          d="M2789.5 1948.5H3011.5V2241.5H2789.5z"
        ></path>
        <path
          id="studio"
          visibility={getVisibility("studio")}
          fill="#FF7E7E"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
          d="M2488.95 2002.01l.33 90.86 214.19 1.97.33-93.16-214.85.33z"
        ></path>
        <path
          id="playingRoom"
          visibility={getVisibility("playingRoom")}
          fill="#FF7E7E"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
          d="M2488.95 2095.83l-.33 126.61 215.18 1.31-.98-126.28-213.87-1.64z"
        ></path>
        <path
          id="music"
          visibility={getVisibility("music")}
          fill="#2D9CDB"
          stroke="#4F4F4F"
          strokeOpacity="0"
          strokeWidth="3"
          d="M3291.5 1629c0-17.38-14.11-31.5-31.5-31.5h-377c-17.38 0-31.5 14.12-31.5 31.5v88c0 17.38 14.12 31.5 31.5 31.5h377c17.39 0 31.5-14.12 31.5-31.5v-88z"
        ></path>
        <path
          id="childrenBooks"
          visibility={getVisibility("childrenBooks")}
          fill="#2D9CDB"
          stroke="#4F4F4F"
          strokeOpacity="0"
          strokeWidth="3"
          d="M3477.5 1861c0-40.01-32.49-72.5-72.5-72.5h-258c-40.01 0-72.5 32.49-72.5 72.5v267c0 40.01 32.49 72.5 72.5 72.5h258c40.01 0 72.5-32.49 72.5-72.5v-267z"
        ></path>
        <path
          id="kidsLibraryInfo"
          visibility={getVisibility("kidsLibraryInfo")}
          fill="#1263D0"
          stroke="#4F4F4F"
          strokeOpacity="0"
          strokeWidth="3"
          d="M3381.5 1597.5H3512.5V1701.5H3381.5z"
        ></path>
        <path
          id="info"
          visibility={getVisibility("info")}
          fill="#1263D0"
          stroke="#4F4F4F"
          strokeOpacity="0"
          strokeWidth="3"
          d="M2696.5 1404.5H2976.5V1557.5H2696.5z"
          transform="translate(-6.15 -6.15)"
        ></path>
        <path
          id="kidsPlayground"
          visibility={getVisibility("kidsPlayground")}
          fill="#2D9CDB"
          stroke="#4F4F4F"
          strokeOpacity="0"
          strokeWidth="3"
          d="M3582.5 1531.5H3836.5V1767.5H3582.5z"
        ></path>
        <path
          id="yesBox"
          visibility={getVisibility("yesBox")}
          fill="#24BD66"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
          d="M2981.01 1398.34l.51 152.22 166.58.52-4.62-151.2"
        ></path>
        <path
          id="VOX"
          visibility={getVisibility("VOX")}
          fill="#24BD66"
          fillRule="nonzero"
          stroke="#4F4F4F"
          strokeOpacity="0"
          strokeWidth="3"
          d="M3450.08 1076.15l-94.72-.23.04 76.89-150.79-.33-.66-71.65-111.1-268.102 268.06-110.197 88.53 3.547.64 370.072z"
        ></path>
        <g id="elevators" visibility={getVisibility("elevators")}>
          <path
            fill="#CB731C"
            stroke="#4F4F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeOpacity="0"
            strokeWidth="4"
            d="M1884.58 492.401l-2.05 93.281 289.58 1.025-1.03-92.256-286.5-2.05z"
          ></path>
          <path
            fill="#CB731C"
            stroke="#4F4F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeOpacity="0"
            strokeWidth="4"
            d="M1927.12 496.501l2.05 90.206 288.55-1.537-.51-86.618-290.09-2.051z"
            transform="translate(1564.25)"
          ></path>
        </g>
        <g
          id="childrenHealthCare"
          visibility={getVisibility("childrenHealthCare")}
          fill="#CB3CFF"
          stroke="#4F4F4F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
        >
          <path d="M3909.6 1869.1l166.06.51-2.05-1150.637-158.37-1.538-5.64 1151.665zM3358.01 1080.49l-.64 149.28 481.14.63.64-151.19-238.97-.64-2.56-373.511-144.15 1.282-.65 373.509-94.81.64zM3356.72 1319.46v155.68l360.7-1.92-1.92-153.12-358.78-.64z"></path>
        </g>
        <path
          id="mehilainenDental"
          visibility={getVisibility("mehilainenDental")}
          fill="#CB3CFF"
          fillRule="nonzero"
          stroke="#4F4F4F"
          strokeOpacity="0"
          strokeWidth="3"
          d="M2890.58 145.063l497.76.64-1.28 438.431-497.12 206.398.64-645.469z"
        ></path>
        <path
          id="husLabXRay"
          visibility={getVisibility("husLabXRay")}
          fill="#CB3CFF"
          fillRule="nonzero"
          stroke="#CB3CFF"
          strokeOpacity="0"
          strokeWidth="3"
          d="M2272.64 144.422h615.33l-.64 647.656-297.78 122.125-314.99-162.829-1.92-606.952z"
        ></path>
        <path
          id="mentalHealthCenter"
          visibility={getVisibility("mentalHealthCenter")}
          fill="#CB3CFF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
          d="M1064.98 1957.84l56.38 498.95 181.31 3.84-66.63-522.14-171.06 19.35z"
        ></path>
        <g
          id="healthCareCenter"
          visibility={getVisibility("healthCareCenter")}
          fill="#CB3CFF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeOpacity="0"
          strokeWidth="4"
        >
          <path d="M168.449 844.56l.82 295.63 445.289.82-2.05-296.86-444.059.41zM167.951 1226.36l1.64 253.8 271.847-3.28.41-252.17-273.897 1.65M214.805 639.752l1.312 103.654 372.96 1.394V619.742l-212.886-73.477-36.082 97.423-125.304-3.936z"></path>
        </g>
      </g>
    </svg>
  );
};
