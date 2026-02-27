export const metadata = {
  title: "Guest Menu",
  description: "Browse our menu and order from your table",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>{children}</div>
  );
}
