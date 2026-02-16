import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
}

export const BagTitle = ({ icon: Icon, title }: Props) => {
  return (
    <div className="w-full flex justify-center mb-6">
      <p className="inline-flex items-center gap-1 bg-hero text-white px-4 py-2 rounded-full text-sm font-medium">
        <Icon className="w-4 h-4" />
        {title}
      </p>
    </div>
  );
};
