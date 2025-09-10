import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base = "px-4 py-2 rounded-md whitespace-nowrap font-bold text-sm pt-3";
  const styles = {
    primary: "bg-orange-500 text-white hover:opacity-90",
    outline: "border border-orange-500 hover:opacity-90",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
