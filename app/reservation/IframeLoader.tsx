"use client";
// import { Box, Center, Spinner, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

type IframeLoaderProps = {
  src: string;
  width?: string;
  height?: string;
};

export default function IframeLoader({ src, width = '100%', height = '300px' }: IframeLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = (event: React.SyntheticEvent<HTMLIFrameElement>) => {
    console.log('Iframe loaded:', event);
    setIsLoading(false);
  };

  return (
    // <Box className="relative overflow-hidden">
    //   {/* {isLoading && (
    //     <Box pos="absolute" inset="0" bg="bg/80">
    //       <Center h="full">
    //         <VStack colorPalette="teal">
    //           <Spinner color="colorPalette.600" />
    //           <Text color="colorPalette.600">Loading...</Text>
    //         </VStack>
    //       </Center>
    //     </Box>
    //   )} */}

    // </Box>
    <iframe
        src={src}
        title="embedded-content"
        width="100%"
        height="100%"
        onLoad={handleIframeLoad}
      />
  );
};
