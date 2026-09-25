import LoadingPage from "@/components/LoadingPage/Loadingpage";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CustomHead from "@/components/CustomHead/CustomHead";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [mobilemenu, setmobilemenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setLoading(true);
    });
  });
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 40 });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [loading]);
  useEffect(() => {
    const moveHandler = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", moveHandler, { passive: true });
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);
  return (
    <div>
      <CustomHead title={"Rishi Gupta"} />
      {loading && (
        <LoadingPage
          completeLoading={() => {
            setLoading(false);
          }}
          page={router.pathname === "/" ? "About" : router.pathname.slice(1)}
        />
      )}

      <Navbar mobilemenu={mobilemenu} setmobilemenu={setmobilemenu} />
      <div className="stars-bg">
        <div className="aurora" />
        <div className="signal" />
        <div className="signal" />
        <pre className="code-ghost one">{`const dev = {
  name: "Rishi Gupta",
  stack: ["React", "Next.js", "Node"],
  learning: true,
};`}</pre>
        <pre className="code-ghost two">{`function build(idea) {
  return ship(idea);
}`}</pre>
      </div>
      <div className="cursor-glow" />
      {!loading && !mobilemenu && (
        <>
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </div>
  );
}
