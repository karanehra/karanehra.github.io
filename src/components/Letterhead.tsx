import Link from 'next/link';

export default function Letterhead() {
  return (
    <header className="flex flex-col items-center text-center mb-12">
      <h1 className="text-3xl md:text-6xl font-mono font-light">Karan Nehra</h1>
      <nav className="mt-2 space-x-6 text-xs md:text-xl uppercase font-mono font-extralight">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/career" className="hover:underline">
          Career
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
      </nav>
    </header>
  );
}