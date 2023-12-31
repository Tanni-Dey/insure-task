import HeaderPage from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Advanced Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderPage />
        {children}
      </body>
    </html>
  );
}
