import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "",
  showSubtitle = true,
  size = "md",
}) => {
  const isLight = variant === "light"; // For dark/navy backgrounds

  const sizeClasses = {
    sm: {
      img: "h-10 sm:h-11 w-auto max-w-[54px]",
      title: "text-lg sm:text-xl",
      subtitle: "text-[10px]",
    },
    md: {
      img: "h-12 sm:h-14 w-auto max-w-[68px]",
      title: "text-xl sm:text-2xl",
      subtitle: "text-[11px]",
    },
    lg: {
      img: "h-16 sm:h-20 w-auto max-w-[90px]",
      title: "text-2xl sm:text-3xl",
      subtitle: "text-xs",
    },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Official Emblem Logo Image */}
      <div className="relative flex-shrink-0 flex items-center justify-center p-0.5 transition-transform duration-300 group-hover:scale-105">
        <img
          src={isLight ? "/images/rr-logo.png" : "/images/rr-logo-dark.png"}
          alt="RR Cab Service Official Logo"
          className={`${sizeClasses.img} object-contain drop-shadow-sm`}
          loading="eager"
        />
      </div>

      {/* Brand Text Stack */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-heading font-black tracking-tight ${sizeClasses.title} ${
              isLight ? "text-white" : "text-navy"
            }`}
          >
            RR <span className="text-yellow">CAB</span> SERVICE
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`font-heading font-semibold tracking-wider uppercase mt-1 ${sizeClasses.subtitle} ${
              isLight ? "text-slate-300" : "text-charcoal-muted"
            }`}
          >
            RAJVEER RANVEER TOURS AND TRAVELS
          </span>
        )}
      </div>
    </div>
  );
};
