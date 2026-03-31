"use client";
import Link from "next/link";
import { Box, Button, Center, HStack, VStack } from '@chakra-ui/react';
import { LuArrowLeft } from "react-icons/lu";
import ReservationForm from './ReservationForm';

export default function ReservationPage() {

  return (
    <Center
      minH="var(--app-min-height, 100vh)"
      w="full"
      flexDir="column"
      bg="gray.50"
      py={4}
      px={4}
      style={{ overscrollBehaviorY: 'contain' }}
    >
      <VStack maxW="769px" w="full" gap={3} align="stretch">
        <Link href="/" style={{ textDecoration: "none", width: "fit-content" }}>
          <Button
            type="button"
            variant="ghost"
            size="md"
            color="gray.600"
            _hover={{ bg: "gray.100", color: "gray.800" }}
            rounded="lg"
            px={2}
          >
            <HStack gap={2}>
              <LuArrowLeft size={18} aria-hidden />
              Назад
            </HStack>
          </Button>
        </Link>

        <Box
          w="full"
          bg="white"
          borderRadius="xl"
          border="1px"
          borderColor="gray.200"
          shadow="2xl"
          position="relative"
          overflow="hidden"
        >
          <ReservationForm />
        </Box>
      </VStack>
    </Center>
  );
}