import { cn } from "@/lib/utils";

interface GradientProps {
  className?: string;
}

export const Gradient = ({ className }: GradientProps) => {
  return (
    <svg
      className={cn("", className)}
      width="1262"
      height="1047"
      viewBox="0 0 1262 1047"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1_27037)">
        <ellipse
          cx="669"
          cy="523.5"
          rx="369"
          ry="223.5"
          fill="url(#paint0_linear_1_27037)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_27037"
          x="0"
          y="0"
          width="1338"
          height="1047"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="150"
            result="effect1_foregroundBlur_1_27037"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_27037"
          x1="300"
          y1="522.977"
          x2="967.764"
          y2="522.977"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--primary)" />
          <stop offset="0.789306" stopColor="#4B3BE4" />
        </linearGradient>
      </defs>
    </svg>
  );
};
