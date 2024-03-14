// pages/_app.js

import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirecciona a index.html si la ruta es la raíz
    if (router.pathname === "/") {
      window.location.href = "/index.html";
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
