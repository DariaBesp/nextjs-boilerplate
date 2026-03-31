"use client";
import { Box, Center, Spinner, VStack } from '@chakra-ui/react';
import { useState, useEffect, useCallback } from 'react';

export default function ReservationForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeSrc, setIframeSrc] = useState<string>('');

  const handleIframeLoad = useCallback(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_RAIDA_FORM_URL;
    const config = process.env.NEXT_PUBLIC_RAIDA_FORM_CONFIG;

    if (baseUrl && config) {
      const uniqueUrl = `${baseUrl}${config}&v=${Math.random().toString(36).slice(2)}`;
      setIframeSrc(uniqueUrl);
    }
  }, []);

  const showLoadingOverlay = !iframeSrc || isLoading;

  return (
    <Box w="100%" position="relative" bg="white" borderRadius="xl">
      <VStack align="stretch" gap={0}>
        {!iframeSrc ? (
          <Box className="reservation-embed-slot" borderTopRadius="xl" />
        ) : (
          <Box position="relative" className="reservation-embed-slot" borderTopRadius="xl" overflow="hidden">
            <iframe
              className="reservation-embed-iframe"
              src={iframeSrc}
              title="Заявка на бронирование стола"
              allow="fullscreen"
              onLoad={handleIframeLoad}
            />
          </Box>
        )}

        <Box
          color="gray.400"
          px={8}
          py={4}
          fontSize="sm"
          borderTopWidth="1px"
          fontFamily="RaidaFont, sans-serif"
          textWrap="balance"
        >
          Обратите внимание, что бронирование требует обязательного подтверждения со стороны администрации заведения.
          Если вам не перезвонили в течение 2 часов, обратитесь в заведение самостоятельно
        </Box>
      </VStack>

      {showLoadingOverlay && (
        <Center
          position="absolute"
          inset={0}
          zIndex={2}
          bg="white"
          borderRadius="xl"
        >
          <Spinner
            size="xl"
            color="blue.600"
            aria-label="Загрузка формы бронирования"
            css={{
              borderWidth: '2px',
              '--spinner-track-color': 'colors.blue.200',
            }}
          />
        </Center>
      )}
    </Box>
  );
};
