import { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";
import Letterhead from "./Letterhead";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-zinc-900 text-zinc-100" : "bg-white text-black"
      }`}
    >
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-8">
        <Letterhead />
        <div className="mx-2">{children}</div>
      </div>
    </div>
  );
}
