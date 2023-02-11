import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import About from "@/components/aboutpage/About";
import CustomHead from "@/components/CustomHead/CustomHead";
export default function Home() {
  return (
    <>
      <CustomHead title={"About | Rishi Gupta"} />
      <About />
    </>
  );
}
