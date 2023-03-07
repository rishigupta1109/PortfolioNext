import React from "react";
import logo from "../../resources/logo.gif";
import Head from "next/head";
export default function CustomHead({ title }) {
  return (
    <Head>
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
        content="Hello There! , My name is Rishi Gupta. I am a pre-final year student persuing Bachelor of engineering in electronics and telecommunication branch in IET DAVV, Indore. I am a full stack erb developer experienced in MERN stack and NEXTJS."
      />
      <meta
        name="keywords"
        content="Rishi Gupta, Web developer , MERN developer , IET , Student"
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
