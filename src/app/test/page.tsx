import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function test() {
  return (
    <div className="space-y-4">
      <h1>Buttons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
        <Button>Primary Button</Button>
        <Button variant="secondary" loading>
          Secondary
        </Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="customColor" color="bg-purple-600">
          Custom Color
        </Button>
      </div>
      <h1>Inputs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
        <Input label="Default Input" placeholder="Enter text..." />
      </div>
    </div>
  );
}
