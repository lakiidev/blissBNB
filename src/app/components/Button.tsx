"use client";
import { FC, MouseEvent } from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? "bg-white dark:bg-zinc-950" : "bg-rose-500"
      }
        ${outline ? "border-black" : "bg-rose-500"}
        
        ${
          outline
            ? "text-black dark:text-white"
            : "text-white dark:text-black dark:font-semibold"
        }
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "text-sm" : "text-md"}
        ${
          small
            ? "border-[1px] dark:border-black"
            : "border-2 dark:border-black"
        }
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
