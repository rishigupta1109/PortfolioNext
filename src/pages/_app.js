import LoadingPage from "@/components/LoadingPage/Loadingpage";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CustomHead from "@/components/CustomHead/CustomHead";
import stars from "../resources/stars.png";
import Image from "next/image";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [mobilemenu, setmobilemenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log("route change start");
    });
    router.events.on("routeChangeComplete", () => {
      console.log("route change complete");
      setLoading(true);
    });
  });
  return (
    <>
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
      <div className="stars-bg" />
      {!loading && !mobilemenu && <Component {...pageProps} />}
    </>
  );
}
