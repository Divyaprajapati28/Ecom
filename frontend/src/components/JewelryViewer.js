import { Box, Button, Heading, Image } from "@chakra-ui/react";

const JewelryViewer = () => {
  const handleOpenDemo = () => {
    window.open("/dist/index.html", "_blank"); // Opens in a new tab
  };

  return (
    <Box textAlign="center" p={4} position="relative">
      <Heading
        mb={4}
        fontSize="4xl"
        fontWeight="bold"
        color="#52322b"
        textAlign="center"
        mt="8"
      >
        Jewelry
      </Heading>
      <Image
        src="/images/jewelryC.png" // Ensure this path is correct and the image exists
        alt="Jewelry Banner"
        w="100%"
        h="100%"
        objectFit="cover"
        // filter="blur(px)"
        top={0}
        left={0}
        zIndex={-1}
        borderRadius={"md"}
      />
      <Button
        colorScheme="teal"
        size="lg"
        mt={4}
        onClick={handleOpenDemo}
        position="relative"
        // top="50%"
        transform="translateY(-50vh)"
      >
        View Jewelry Demo
      </Button>
    </Box>
  );
};

export default JewelryViewer;
