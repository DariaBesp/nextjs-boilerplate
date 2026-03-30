import { Bookings } from "../../components/block-components/Bookings";
import { Box, Heading } from "@chakra-ui/react";

export default function BookingsPage() {
  return (
    <Box p={10} bg="gray.100" minHeight="100vh">
      <Heading size="xl" mb={4}>
        Добро пожаловать на страницу бронирований!
      </Heading>
      <Bookings />
    </Box>
  );
}