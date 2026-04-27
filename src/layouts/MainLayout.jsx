import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/Footer";

import ScrollToTop from "../components/common/ScrollToTop";
import BackToTop from "../components/common/BackToTop";
import Footer from "../components/common/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary text-text">
      <Navbar />
      <ScrollToTop />
      <main className="pt-16">{children}</main>
      <BackToTop />

      {/* <Footer /> */}
      <Footer/>
    </div>
  );
};

export default MainLayout;
