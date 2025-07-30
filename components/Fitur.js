export default function Fitur() {
  return (
    <section id="fitur" className="bg-yellow-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-yellow-700 md:text-left">
          Kenapa Memilih Kami?
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {/* Item 1 */}
          <div className="group transform rounded bg-white p-6 text-center shadow transition duration-300 hover:scale-105 hover:shadow-xl">
            <i className="bx bx-paint text-4xl text-yellow-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6"></i>
            <h3 className="mt-4 font-semibold">Custom Desain</h3>
            <p className="text-sm text-gray-600">
              Bisa sesuai permintaan dan tema acara.
            </p>
          </div>

          {/* Item 2 */}
          <div className="group transform rounded bg-white p-6 text-center shadow transition duration-300 hover:scale-105 hover:shadow-xl">
            <i className="bx bx-package text-4xl text-yellow-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6"></i>
            <h3 className="mt-4 font-semibold">Packaging Premium</h3>
            <p className="text-sm text-gray-600">
              Tampilan eksklusif & elegan.
            </p>
          </div>

          {/* Item 3 */}
          <div className="group transform rounded bg-white p-6 text-center shadow transition duration-300 hover:scale-105 hover:shadow-xl">
            <i className="bx bx-time text-4xl text-yellow-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6"></i>
            <h3 className="mt-4 font-semibold">Cepat & Tepat</h3>
            <p className="text-sm text-gray-600">
              Pengerjaan cepat, sesuai deadline.
            </p>
          </div>

          {/* Item 4 */}
          <div className="group transform rounded bg-white p-6 text-center shadow transition duration-300 hover:scale-105 hover:shadow-xl">
            <i className="bx bx-gift text-4xl text-yellow-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6"></i>
            <h3 className="mt-4 font-semibold">Kartu Ucapan Gratis</h3>
            <p className="text-sm text-gray-600">Bisa tulis ucapan personal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
