import { NotebookTabs } from "lucide-react";
import { features } from "../data";
import { BagTitle } from "./ui";

export const Features = () => {
  return (
    <section className="w-full px-6 py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto">
        <BagTitle icon={NotebookTabs} title="Características" />
        <div className="w-full mx-auto mb-12 lg:mb-16 max-w-3xl flex justify-center items-center flex-col">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight text-center">
            Características que simplifican la gestión de asistencias
          </h2>
          <p className="text-sm text-gray-600 leading-tight max-w-xl mx-auto">
            Todo lo que necesitas para gestionar tu equipo de forma eficiente y
            profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-hero/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-hero" strokeWidth={2} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
