import { Roboto, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
});

// const IBM_PLex_Serif = IBM_PLex_Serif({
//   subsets: ["latin"],
//   weight: ["100", "200", "400", "500", "700"],
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={` text-pizza_black text-sm bg-pizza_light`}>
        <AppProvider>
          <nav className="w-full m-auto">
            <Header />
          </nav>

          {children}

          <footer>
            <Footer />
          </footer>

          <Toaster
            toastOptions={{
              // Define default options
              duration: 4000,
            }}
          />
        </AppProvider>
      </body>
    </html>
  );
}
