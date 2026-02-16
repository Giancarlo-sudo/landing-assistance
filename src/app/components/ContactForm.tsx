"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Contact } from "lucide-react";
import { validateForm } from "../validation/validateForm";
import { FormDataType } from "../types";
import { BagTitle } from "./ui";

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm({ formData, setErrors })) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Formulario enviado:", formData);

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "",
        message: "",
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error al enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full py-16 bg-linear-to-r from-white from-40% via-sky-50/10 to-sky-50 shadow-md"
      id="contact"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        <BagTitle icon={Contact} title="Contacto" />

        <div className="flex flex-col gap-12">
          {/* Título */}
          <div className="text-center max-w-3xl flex flex-col justify-center items-center mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu gestión?
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Agenda una demo personalizada y descubre cómo Kaia puede
              simplificar la gestión de asistencias en tu empresa
            </p>
          </div>

          {/* Grid de 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Columna Izquierda - Formulario */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hero focus:border-transparent outline-none transition-all ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Juan Pérez"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email y Teléfono */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hero focus:border-transparent outline-none transition-all ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="juan@empresa.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hero focus:border-transparent outline-none transition-all ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+51 999 999 999"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hero focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tus necesidades..."
                  />
                </div>

                {/* Botón Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#333333] text-white py-3.5 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar mensaje
                    </>
                  )}
                </button>

                {/* Mensaje de éxito */}
                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    ✅ ¡Mensaje enviado! Nos contactaremos contigo pronto.
                  </div>
                )}
              </form>
            </div>

            {/* Columna Derecha - Información de Contacto */}
            <div className="space-y-8">
              {/* Datos de contacto */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contacto directo
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-hero rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm flex flex-col h-full justify-center gap-0.5">
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:nazareno@in-order.com.pe"
                        className="text-gray-900"
                      >
                        nazareno@in-order.com.pe
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-hero rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm flex flex-col h-full justify-center gap-0.5">
                      <p className="font-medium text-gray-900 ">WhatsApp</p>
                      <a
                        href="https://wa.me/51922929616"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-gray-700"
                      >
                        +51 922 929 616
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-hero rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm flex flex-col h-full justify-center gap-0.5">
                      <p className="font-medium text-gray-900 ">Ubicación</p>
                      <p className="text-gray-600">Lima, Perú</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="bg-hero/10 rounded-2xl p-6 border border-sky-100">
                <div className="text-sm text-gray-600 flex flex-col gap-1">
                  <span className="font-bold text-gray-900 uppercase text-sm">
                    Horario de atención:
                  </span>
                  <div className="flex flex-col gap-1">
                    <span>Lunes a Viernes: 9:00 AM - 6:00 PM</span>
                    <span>Sábados: 9:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
