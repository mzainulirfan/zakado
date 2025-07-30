// app/page.js
"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Fitur from "@/components/Fitur";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function Home() {
  return (
    <main className="font-inter text-gray-800">
      <Header />
      <Hero />
      <Product />
      <Fitur />
      <Testimonial />
      <About />
      <Footer />
      <ScrollTopButton />
    </main>
  );
}
