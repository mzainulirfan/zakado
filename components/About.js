// components/About.js
import React from "react";

const About = () => {
  return (
    <section id="tentang" className="bg-yellow-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold text-yellow-700">
          Tentang Kami
        </h2>
        <p className="mb-4 text-gray-700">
          HampersKu adalah toko online yang menyediakan berbagai macam hampers
          dan hadiah untuk momen spesial Anda. Kami hadir dengan layanan custom
          dan packaging eksklusif yang membuat kado Anda lebih berkesan.
        </p>
        <div id="kontak" className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold">Kontak Kami</h3>
            <p>Email: hampersku@example.com</p>
            <p>WhatsApp: +62 812-3456-7890</p>
            <p>Alamat: Jl. Mawar No. 123, Jakarta</p>
          </div>
          <iframe
            className="h-64 w-full rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.34840858964!2d106.68942963272661!3d-6.229386698067506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8e393da91%3A0x3027a76e352ba80!2sJakarta!5e0!3m2!1sen!2sid!4v1635491379132!5m2!1sen!2sid"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
