import Select from "@/components/CustomFields/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function test() {
  return (
    <div className="space-y-4">
      <SectionLayout title="Buttons">
        <Button icon={<Mail />}>Primary Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline" loading>
          Outline
        </Button>
        <Button variant="ghost">Ghost</Button>
        <Button color="bg-purple-600">Custom Color</Button>
      </SectionLayout>
      <SectionLayout title="Inputs">
        <Input label="Default Input" placeholder="Enter text" />
      </SectionLayout>
      <SectionLayout title="Selects">
        <Select label="Age" placeholder="Select an option" options={options} />
      </SectionLayout>
    </div>
  );
}

const SectionLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-amber-600">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {children}
      </div>
    </div>
  );
};
