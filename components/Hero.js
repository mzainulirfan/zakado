export default function Hero() {
  return (
    <section id="hero" className="relative">
      <img
        src="https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Hero"
        className="h-[50vh] w-full object-cover md:h-[80vh]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellow-800/25 px-4 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-md md:text-5xl font-playfair">
          Hadiah Spesial, Kenangan Tak Terlupakan
        </h1>
        <p className="mt-4 max-w-xl text-lg text-yellow-100">
          Buat momen wisuda, pernikahan, dan ulang tahun lebih berkesan dengan
          hampers custom eksklusif buatan kami.
        </p>
        <a
          href="#produk"
          className="mt-6 inline-block rounded-full bg-yellow-500 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-yellow-600"
        >
          Lihat Koleksi Hampers
        </a>
      </div>
    </section>
  );
}
