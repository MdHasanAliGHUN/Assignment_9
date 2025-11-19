import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import ToastProvider from "./components/ToastProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 100,
      once: false,
      delay: 100,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop/>
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
      <ToastProvider />
    </div>
  );
};

export default App;
