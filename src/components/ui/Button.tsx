import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "yellow" | "navy" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "yellow",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  href,
  external = false,
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base rounded-xl gap-2.5 font-bold",
  }[size];

  const variantClasses = {
    yellow:
      "bg-yellow hover:bg-yellow-hover text-navy font-bold shadow-yellow-glow hover:shadow-lg active:scale-[0.98]",
    navy:
      "bg-navy hover:bg-navy-light text-white font-semibold shadow-navy-glow hover:shadow-lg active:scale-[0.98]",
    outline:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold active:scale-[0.98]",
    white:
      "bg-white hover:bg-slate-50 text-navy font-bold shadow-card hover:shadow-card-hover active:scale-[0.98]",
    ghost:
      "text-navy hover:bg-navy/5 font-semibold active:scale-[0.98]",
  }[variant];

  const baseClasses = `inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none font-heading tracking-wide ${
    fullWidth ? "w-full" : ""
  } ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};
