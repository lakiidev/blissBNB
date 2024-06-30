"use itemhk";
import { FC } from "react";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const MenuItem: FC<MenuItemProps> = ({ onClick, label, className }) => {
  return (
    <div
      className={`px-4 py-3 hover:bg-neutral-100 transition font-semibold ${className} dark:hover:bg-black`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
