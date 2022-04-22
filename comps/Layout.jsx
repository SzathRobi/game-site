import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollContextWrapper from "../contexts/ScrollContextWrapper";

export default function Layout({ children }) {
  return (
    <div>
      <ScrollContextWrapper>
        <Header />
        {children}
        <Footer />
      </ScrollContextWrapper>
    </div>
  );
}
