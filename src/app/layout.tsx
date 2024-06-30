import ToasterProvider from "./Providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import Navbar from "./components/Navbar/Navbar";
import Providers from "./components/Providers";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "BlissBnB",
  description: "Explore, book, and embark on unforgettable journeys",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ToasterProvider />
          <RentModal />
          <SearchModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
