import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display, Great_Vibes } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LangProvider } from "@/lib/i18n";
import strings from "@/content/strings.json";
import "./globals.css";

const f0 = DM_Serif_Display({ variable: "--font-dmserif", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
const f1 = DM_Sans({ variable: "--font-dmsans", subsets: ["latin"] });
const f2 = Great_Vibes({ variable: "--font-vibes", subsets: ["latin"], weight: "400" });

const EN = strings.en as Record<string, string>;
const ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%239b2c6e'/%3E%3Ccircle cx='32' cy='32' r='20' fill='%23fbf6ee'/%3E%3Ccircle cx='27' cy='27' r='2.5' fill='%23c4ad8e'/%3E%3Ccircle cx='37' cy='27' r='2.5' fill='%23c4ad8e'/%3E%3Ccircle cx='27' cy='37' r='2.5' fill='%23c4ad8e'/%3E%3Ccircle cx='37' cy='37' r='2.5' fill='%23c4ad8e'/%3E%3Cpath d='M26 27h12M26 37h12' stroke='%239b2c6e' stroke-width='2.5'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: EN.title.replace(/&amp;/g, "&"),
  description: EN.desc,
  icons: { icon: ICON },
};
export const viewport: Viewport = { themeColor: "#9b2c6e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${f0.variable} ${f1.variable} ${f2.variable}`}>
      <body className="min-h-dvh leading-relaxed">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LangProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
