import { useState } from "react";

import Headers from "../components/header";
import About from "../components/about";
import Sponsor from "../components/sponsor";
import Galeri from "../components/galeri";
import Berita from "../components/berita";
import Footer from "../components/footer";

function LandingPage() {
  return (
    <>
      <Headers />
      <About />
      <Sponsor />
      <Galeri />
      <Berita />
      <Footer />
    </>
  );
}

export default LandingPage;
