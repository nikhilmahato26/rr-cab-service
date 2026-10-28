import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightText,
  description,
  align = "center",
  dark = false,
  className = "",
}) => {
  const isCentered = align === "center";

  return (
    <div
      className={`max-w-3xl ${isCentered ? "mx-auto text-center" : "text-left"} mb-12 sm:mb-16 ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm ${
            dark
              ? "bg-navy-light text-yellow border border-yellow/20"
              : "bg-navy text-yellow"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}{" "}
        {highlightText && (
          <span className="relative inline-block z-0 text-navy whitespace-nowrap">
            <span className="relative z-10 px-1">{highlightText}</span>
            <span
              className="absolute inset-x-0 bottom-1.5 h-3 sm:h-4 bg-yellow -z-10 rounded-sm -rotate-1 opacity-90"
              aria-hidden="true"
            />
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-charcoal-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
