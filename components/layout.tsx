import Footer from "./footer";
import Meta from "./meta";
import { Poppins, PT_Serif } from "next/font/google";

const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-poppins",
});
const serif = PT_Serif({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-ptserif",
});

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className={`min-h-screen ${poppins.variable} ${serif.variable}`}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
