import Link from "next/link";
import { Center, VStack, HStack, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
      <VStack gap={8}>
        <HStack gap={4} flexDirection={{ base: "column", sm: "row" }}>
          <Link href="/reservation" style={{ textDecoration: 'none' }}>
            <Button
              size="lg"
              bg="blue.600"
              color="white"
              _hover={{ bg: "blue.700", shadow: "xl" }}
              rounded="xl"
              px={8}
              py={4}
              fontSize="lg"
              fontWeight="semibold"
              shadow="lg"
            >
              Make a Reservation
            </Button>
          </Link>
          <Link href="/work-portal/login" style={{ textDecoration: 'none' }}>
            <Button
              size="lg"
              bg="gray.800"
              color="white"
              _hover={{ bg: "gray.900", shadow: "xl" }}
              _dark={{ bg: "gray.700" }}
              rounded="xl"
              px={8}
              py={4}
              fontSize="lg"
              fontWeight="semibold"
              shadow="lg"
            >
              Login to Portal
            </Button>
          </Link>
          <Link
            href="/bookings"
            className="rounded-xl bg-zinc-800 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition hover:bg-zinc-900 hover:shadow-xl dark:bg-zinc-700 dark:hover:bg-zinc-600"
          >
            View Bookings
          </Link>
        </HStack>
      </VStack>
    </Center>
  );
}
