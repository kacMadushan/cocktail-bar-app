import "./styles/globals.css";
import type { Metadata } from "next";
import FavouriteContextProvider from "@/lib/context/FavouriteContext";
import { abrilFatface, jost } from "@/lib/utils/typography";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
  title: "Cocktail Bar",
  description: "Drink your favourite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
    >
      <body
        className={`${jost.variable} ${abrilFatface.variable} grid min-h-screen grid-rows-[84px_1fr_84px]`}
      >
        <FavouriteContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </FavouriteContextProvider>
      </body>
    </html>
  );
}
