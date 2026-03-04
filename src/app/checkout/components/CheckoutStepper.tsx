import { StepProps } from "@/app/types";

export const CheckoutStepper = ({ steps, currentStep }: StepProps) => {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                step.number < currentStep
                  ? "bg-hero text-white"
                  : step.number === currentStep
                    ? "bg-hero text-white ring-4 ring-blue-100"
                    : "bg-white text-slate-400 border-2 border-slate-200"
              }`}
            >
              {step.number < currentStep ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                step.number
              )}
            </div>
            <span
              className={`mt-1.5 text-xs font-medium ${
                step.number <= currentStep ? "text-hero" : "text-slate-400"
              }`}
            >
              {step.label}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`h-0.5 w-24 mx-2 mb-5 transition-all duration-300 ${
                step.number < currentStep ? "bg-hero" : "bg-slate-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};
