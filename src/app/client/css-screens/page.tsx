import BeigeFlower from "@/components/client/css-screens/BeigeFlower";
import BentBar from "@/components/client/css-screens/BentBar";
import BlueWhiteSpin from "@/components/client/css-screens/BlueWhiteSpin";

export default function Home() {
  return (
    <div className="mx-auto w-fit grid grid-cols-2 items-center justify-center gap-4">
      <BlueWhiteSpin />
      <BentBar />
      <BeigeFlower />
    </div>
  );
}
