"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Vamos Trabalhar Juntos?</h2>
        <p className="text-gray-400 mb-12">
          Disponível para projetos freelancer e novas oportunidades.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/11989322535"
            target="_blank"
            className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-white transition"
          >
            <p className="font-bold text-lg mb-2 text-white">WhatsApp</p>
            <p className="text-gray-400 text-sm">(Resposta rápida)</p>
          </a>
          
          <a
            href="mailto:godoyj4@outlook.com"
            className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-white transition"
          >
            <p className="font-bold text-lg mb-2 text-white">Email</p>
            <p className="text-gray-400 text-sm">godoyj4@outlook.com</p>
          </a>
          
          <a
            href="https://www.linkedin.com/in/caio-alves-636157194/"
            target="_blank"
            className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-white transition"
          >
            <p className="font-bold text-lg mb-2 text-white">LinkedIn</p>
            <p className="text-gray-400 text-sm">caio-alves-636157194</p>
          </a>
        </div>
      </div>
    </section>
  );
}
