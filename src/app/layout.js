import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Perfect Pizza",
  description: "Best ordering online Pizza app ",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` text-pizza_black text-sm`} >
        {children}
      </body>
    </html>
  );
}
