import CustomHead from "@/components/CustomHead/CustomHead";
import Contact from "@/components/conatctform/Contact";
import ContactDetails from "@/components/global/ContactDetails";
import React from "react";

export default function contactPage() {
  return (
    <>
      <CustomHead title={"Contact | Rishi Gupta"} />
      <Contact />
    </>
  );
}
