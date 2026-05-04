"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Implementar lógica de envio aqui
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Vamos Trabalhar Juntos?</h2>
        <p className="text-gray-600 text-center mb-12">
          Disponível para projetos freelancer e novas oportunidades.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition"
          >
            <p className="font-bold text-lg mb-2">WhatsApp</p>
            <p className="text-gray-600 text-sm">(Resposta rápida)</p>
          </a>
          
          <a
            href="mailto:seu.email@example.com"
            className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition"
          >
            <p className="font-bold text-lg mb-2">Email</p>
            <p className="text-gray-600 text-sm">seu.email@example.com</p>
          </a>
          
          <a
            href="https://linkedin.com/in/seu-perfil"
            target="_blank"
            className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition"
          >
            <p className="font-bold text-lg mb-2">LinkedIn</p>
            <p className="text-gray-600 text-sm">seu-perfil</p>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Seu Nome"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          
          <input
            type="email"
            placeholder="Seu Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          
          <textarea
            placeholder="Sua Mensagem"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
