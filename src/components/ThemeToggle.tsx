import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-20 h-9 rounded-full border transition-colors duration-300 flex items-center px-1 ${
        isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-200 border-neutral-300'
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-sm transform transition-transform duration-300 flex items-center justify-center overflow-hidden ${
          isDarkMode ? 'translate-x-10' : 'translate-x-0'
        }`}
      >
        <Image
          src={isDarkMode ? '/icons/bulb-off.svg' : '/icons/bulb-on.svg'}
          alt="theme icon"
          width={18}
          height={18}
          className="object-contain"
        />
      </div>
    </button>
  );
}