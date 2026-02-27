import Link from "next/link";

export default function PortalMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
     {children}
    </div>
  );
}
