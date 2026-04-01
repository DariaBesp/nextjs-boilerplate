import { Bookings } from "../../components/block-components/Bookings";
import { Box, Heading } from "@chakra-ui/react";

export default function BookingsPage() {
  return (
    <Box p={10} bg="#F5F6F9" minHeight="100vh">
      <Bookings />
    </Box>
  );
}
