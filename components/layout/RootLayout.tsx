import { cn } from "utils/tailwind";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Space_Grotesk } from "next/font/google";
import Head from "./Head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { env } from "env";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-zinc-950 dark:text-gray-100">
      <Head />
      <div
        className={cn(
          "mx-auto min-h-screen max-w-3xl antialiase dark:bg-zinc-950 dark:text-gray-100",
          SpaceGrotesk.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // default to dark mode, can be light, dark, system
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-4 px-2 md:px-0 lg:mx-auto flex flex-col justify-between min-h-screen w-full ">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""} />
      </div>
    </div>
  );
}
