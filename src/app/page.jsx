import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import React from "react";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
    </main>
  );
}
