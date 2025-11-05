import { Navbar } from "@/components/client/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-24 pb-10">
      <Navbar />
      {children}
    </div>
  );
}
