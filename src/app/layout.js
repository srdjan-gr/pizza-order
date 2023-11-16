import { Roboto, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
});

// const IBM_PLex_Serif = IBM_PLex_Serif({
//   subsets: ["latin"],
//   weight: ["100", "200", "400", "500", "700"],
// });

export const metadata = {
  title: "Perfect Pizza",
  description: "Best ordering online Pizza app ",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={` text-pizza_black text-sm bg-pizza_light`} >
        {children}
      </body>
    </html>
  );
}
