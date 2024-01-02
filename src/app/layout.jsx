import "../styles/globals.css";
import ThemeWrapper from "@/modules/Next-themes/ThemeWrapper";
import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Team Undergo",
  description: "Team Undergo's Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="font-['Inter'] w-full h-full dark:bg-[#151515] transition-colors duration-300">
        <ThemeWrapper>
          <NavBar />
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
