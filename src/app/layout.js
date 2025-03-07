import { Montserrat } from "next/font/google";
import "./globals.css";
import { TokenProvider } from "@/context/TokenProvider";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Европа такси",
  description: "Быстрое и удобное такси с новыми автомобилями. Выбирайте комфорт, безопасность и приятные поездки по городу и за его пределы."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <main>
          <TokenProvider>{children}</TokenProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
