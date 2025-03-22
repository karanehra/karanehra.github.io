import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Letterhead() {
  const { isDarkMode } = useTheme();

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: isDarkMode
      ? "repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 12px)"
      : "repeating-linear-gradient(45deg, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 12px)",
  };

  const textClassName = `text-3xl md:text-6xl font-mono font-light ${
    isDarkMode ? "bg-zinc-900 text-zinc-100" : "bg-white text-black"
  }`;

  const linkClassName = `hover:underline ${
    isDarkMode ? "bg-zinc-900 text-zinc-100" : "bg-white text-black"
  }`;

  return (
    <header
      className="flex flex-col items-center text-center py-6 mb-6"
      style={backgroundStyle}
    >
      <h1 className={textClassName}>Karan Nehra</h1>
      <nav className="mt-2 space-x-6 text-xs md:text-xl uppercase font-mono font-extralight">
        <Link href="/" className={linkClassName}>
          Home
        </Link>
        <Link href="/career" className={linkClassName}>
          Career
        </Link>
        <Link href="/blog" className={linkClassName}>
          Blog
        </Link>
      </nav>
    </header>
  );
}
