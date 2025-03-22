import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import PageWrapper from "@/components/PageWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <PageWrapper>
        <Component {...pageProps} />
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
      </PageWrapper>
    </ThemeProvider>
  );
}
