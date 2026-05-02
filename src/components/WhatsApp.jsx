import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  return (
    <>
      <div className="fixed bottom-6 right-5 lg:right-8 lg:bottom-8 z-50">
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-40 animate-ping-slow"></span>
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-30 animate-ping-slower"></span>

        <a
          href="https://wa.me/93799313021?text=Hello%20I%20want%20more%20information%20about%20CLIENTNAME!"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 md:p-4 rounded-full shadow-lg text-white bg-[#25d366] hover:bg-[#20b456] transition-all duration-300 flex items-center justify-center"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
    </>
  );
}

export default WhatsApp;
