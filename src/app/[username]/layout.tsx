import { Navbar } from "@/components/shared/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
