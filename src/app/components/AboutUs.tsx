import Image from 'next/image'
import { Target, Users, Zap, Award } from 'lucide-react'

export const AboutUs = () => {
  return (
    <section className="w-full px-6 py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda - Contenido */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              Sobre Nosotros
            </div>

            {/* Título */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Transformamos la gestión de personal en Perú
            </h2>

            {/* Descripción */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Kaia nace de la necesidad de simplificar uno de los procesos más importantes en las empresas: 
              el control de asistencias. Entendemos que gestionar un equipo no debería ser complicado.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Por eso creamos una solución moderna, intuitiva y 100% en la nube que permite a empresas 
              de todos los tamaños optimizar su tiempo y enfocarse en lo que realmente importa: hacer crecer su negocio.
            </p>

            {/* Valores / Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-sky-600" />
                </div>
                <h4 className="font-bold text-2xl text-gray-900">+500</h4>
                <p className="text-sm text-gray-600">Empresas confían en nosotros</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-sky-600" />
                </div>
                <h4 className="font-bold text-2xl text-gray-900">+10K</h4>
                <p className="text-sm text-gray-600">Usuarios activos</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-sky-600" />
                </div>
                <h4 className="font-bold text-2xl text-gray-900">99.9%</h4>
                <p className="text-sm text-gray-600">Tiempo de actividad</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Imagen */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/image/about/team.svg"
                alt="Equipo Kaia"
                fill
                className="object-cover"
              />
            </div>

            {/* Card flotante (opcional) */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs hidden lg:block">
              <p className="text-sm text-gray-600 mb-2">
                &quot;Kaia nos ayudó a reducir el tiempo de gestión de asistencias en un 80%&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-sky-600 font-bold text-sm">JM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Juan Martínez</p>
                  <p className="text-xs text-gray-500">CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de valores (opcional) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto">
              <Target className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Nuestra Misión</h3>
            <p className="text-gray-600">
              Simplificar la gestión de personal con tecnología accesible para todas las empresas en Perú.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Nuestro Equipo</h3>
            <p className="text-gray-600">
              Profesionales comprometidos con brindar la mejor experiencia y soporte a nuestros clientes.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Innovación</h3>
            <p className="text-gray-600">
              Mejoramos constantemente nuestra plataforma para ofrecer la mejor tecnología del mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}