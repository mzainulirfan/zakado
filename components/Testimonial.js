// components/Testimonial.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sari",
    city: "Bandung",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80",
    text: "Hasilnya bagus banget! Teman aku suka banget sama kado wisudanya. Recommended!",
    stars: 4.5,
  },
  {
    name: "Anisa",
    city: "Surabaya",
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80",
    text: "Sudah pesan 3x, selalu puas. Pengiriman juga cepat.",
    stars: 5,
  },
  {
    name: "Andi",
    city: "Yogyakarta",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80",
    text: "Pelayanan ramah dan produk sesuai ekspektasi. Terima kasih banyak!",
    stars: 4,
  },
];

const renderStars = (stars) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="bx bxs-star"></i>
      ))}
      {halfStar && <i className="bx bxs-star-half"></i>}
    </>
  );
};

const Testimonial = () => {
  return (
    <section id="testimoni" className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-yellow-700">
        Apa Kata Mereka?
      </h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg bg-yellow-100 p-6 text-center shadow">
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto mb-4 h-16 w-16 rounded-full border-2 border-yellow-500 object-cover"
              />
              <div className="mb-2 flex justify-center text-xl text-yellow-500">
                {renderStars(item.stars)}
              </div>
              <p className="italic">"{item.text}"</p>
              <p className="mt-3 font-semibold text-yellow-700">
                — {item.name}, {item.city}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
