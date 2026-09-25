import React from "react";
import logo from "../../resources/logo.gif";
import Head from "next/head";
export default function CustomHead({ title }) {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="vy9VPX4wk0YnIipQvLnkPdDyBbsnyhg9HVPBtRhVf8w"
      />
      <link
        href="favicon-light.ico"
        rel="icon"
        media="(prefers-color-scheme: light)"
      />
      <link
        href="favicon.ico"
        rel="icon"
        media="(prefers-color-scheme: dark)"
      />
      <title>{title}</title>
      <meta
        name="description"
        content="Hello There! , My name is Rishi Gupta. I am an SDE-2 at Nuclei with two years of experience, and a graduate in electronics and telecommunication engineering from IET DAVV, Indore. I am a full stack developer experienced in MERN stack and NEXTJS."
      />
      <meta
        name="keywords"
        content="Rishi Gupta , rishi , gupta , developer , Web developer , MERN developer , SDE , Nuclei , IET-DAVV"
      ></meta>
      <meta name="author" content="Rishi Gupta"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={"../../resources/logo-img.png"} />
    </Head>
  );
}
