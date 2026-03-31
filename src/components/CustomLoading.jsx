import React from "react";

const CustomLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        viewBox="0 0 300 60"
        width="200"
        height="60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow-loading">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <mask id="revealMask-loading">
            <rect x="0" y="0" width="300" height="60" fill="white">
              <animate
                attributeName="x"
                from="-300"
                to="300"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </rect>
          </mask>
        </defs>

        {/* Static dim baseline */}
        <line
          x1="0" y1="30"
          x2="300" y2="30"
          stroke="#1787b6"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        />

        {/* ECG path */}
        <path
          d="
            M 0,30
            L 105,30
            L 112,30
            L 117,22
            L 122,30
            L 128,30
            L 133,10
            L 141,50
            L 150,5
            L 158,50
            L 165,30
            L 170,30
            L 175,22
            L 180,30
            L 300,30
          "
          fill="none"
          stroke="#1787b6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-loading)"
          mask="url(#revealMask-loading)"
        />

        {/* Moving dot */}
        <circle r="4" fill="#1787b6" filter="url(#glow-loading)">
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            path="
              M 0,30
              L 105,30
              L 112,30
              L 117,22
              L 122,30
              L 128,30
              L 133,10
              L 141,50
              L 150,5
              L 158,50
              L 165,30
              L 170,30
              L 175,22
              L 180,30
              L 300,30
            "
          />
        </circle>
      </svg>
    </div>
  );
};

export default CustomLoading;