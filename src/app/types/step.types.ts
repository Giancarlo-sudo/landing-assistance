export interface StepProps {
  steps: Step[];
  currentStep: number;
}

export interface Step {
  number: number;
  label: string;
}
