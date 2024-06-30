"use client";
import { useTheme } from "next-themes";
import { FC } from "react";
import { LuLaptop, LuMoon, LuSun } from "react-icons/lu";
interface ThemeMenuProps {
  setIsThemeOpen: (value: boolean) => void;
}

const ThemeMenu: FC<ThemeMenuProps> = ({ setIsThemeOpen }) => {
  const { setTheme } = useTheme();
  return (
    <div className="absolute -bottom-24 bg-white rounded-xl shadow-md dark:bg-zinc-900">
      <div className="flex flex-col items-start">
        <div
          className="flex items-center gap-2 hover:bg-neutral-100 transition cursor-pointer py-3 px-4 w-full dark:hover:bg-black"
          onClick={() => {
            setTheme("light");
            setIsThemeOpen(false);
          }}
        >
          <LuSun />
          <div className="font-semibold">Light</div>
        </div>
        <div
          className="flex items-center gap-2 hover:bg-neutral-100 transition cursor-pointer py-3 px-4 w-full dark:hover:bg-black"
          onClick={() => {
            setTheme("dark");
            setIsThemeOpen(false);
          }}
        >
          <LuMoon />
          <div className="font-semibold">Dark</div>
        </div>
        <div
          className="flex items-center gap-2 hover:bg-neutral-100 transition cursor-pointer py-3 px-4 w-full dark:hover:bg-black"
          onClick={() => {
            setTheme("system");
            setIsThemeOpen(false);
          }}
        >
          <LuLaptop />
          <div className="font-semibold">System</div>
        </div>
      </div>
    </div>
  );
};

export default ThemeMenu;
