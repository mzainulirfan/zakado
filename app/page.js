"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Fitur from "@/components/Fitur";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] font-sans text-[var(--color-text)]">
      <Header />
      <Hero />
      <Product />
      <Fitur />
      <Testimonial />
      <About />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
      <ScrollTopButton />
    </main>
  );
}
