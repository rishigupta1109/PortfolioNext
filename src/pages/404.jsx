import React from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  router.replace("/");
  return <div>404</div>;
}
