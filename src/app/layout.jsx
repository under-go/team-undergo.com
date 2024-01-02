import "../styles/globals.css";
import ThemeWrapper from "@/modules/Next-themes/ThemeWrapper";
import NavBar from "@/components/NavBar/NavBar";
import AuthContext from "@/context/AuthContext";
import RecoilWrapper from "@/modules/Recoil/RecoilWrapper";

export const metadata = {
  title: "Team Undergo",
  description: "Team Undergo's Blog",
};

export default function RootLayout({ children }) {
  return (
    <RecoilWrapper>
      <html lang="ko">
        <body className="font-['Inter'] w-full h-full dark:bg-[#151515] transition-colors duration-300">
          <AuthContext>
            <ThemeWrapper>
              <NavBar />
              {children}
            </ThemeWrapper>
          </AuthContext>
        </body>
      </html>
    </RecoilWrapper>
  );
}
