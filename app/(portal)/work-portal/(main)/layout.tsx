import Link from "next/link";
import { Box } from "@chakra-ui/react";

export default function PortalMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box minH="100vh">
     {children}
    </Box>
  );
}
