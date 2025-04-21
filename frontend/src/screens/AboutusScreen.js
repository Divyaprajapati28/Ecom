import React from "react";
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Divider,
  Image,
  Flex,
} from "@chakra-ui/react";

const AboutusScreen = () => {
  return (
    <Box p={6} bg="white">
      <Flex justify="center" mb={6}>
        <Image src="/images/logo.png" alt="Golden Zest Logo" width="200px" />
      </Flex>
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        About Us
      </Heading>

      <Text fontSize="lg" mb={6} fontWeight="semibold" textAlign="center">
        A Legacy of Love, A Promise of Purity
      </Text>

      <Flex justify="center">
        <Image
          src="/images/1st.jpg"
          alt="Golden Zest About Us Image"
          width="500px"
          borderRadius="10px"
        />
      </Flex>

      <Text fontSize="md" mb={6} textAlign="center">
        At Golden Zest, we believe that every piece of gold jewelry carries a
        story— a whisper of love, a promise of forever, a celebration of life’s
        precious moments. Our journey began with a simple yet profound vision:
        to create jewelry that isn’t just worn but felt, cherished, and passed
        down through generations.
      </Text>

      <Divider my={6} />

      <Text fontSize="lg" fontWeight="semibold" mb={4} textAlign="center">
        Our Story: Crafted with Heart
      </Text>

      <Text fontSize="md" mb={6} textAlign="center">
        Jewelry is more than an ornament—it’s a connection to our roots, a
        symbol of love, a token of memories that never fade. Inspired by the
        timeless beauty of gold, Golden Zest was born to bring you exquisite
        craftsmanship and purity that speaks to your soul. From delicate
        everyday pieces to magnificent creations for milestones, each piece is
        designed to celebrate you.
      </Text>

      <Flex justify="center">
        <Image
          src="/images/him.jpg"
          alt="Golden Zest About Us Story Image"
          width="500px"
          borderRadius="10px"
        />
      </Flex>

      <Divider my={6} />

      <Text fontSize="lg" fontWeight="semibold" mb={4} textAlign="center">
        Our Promise: Purity, Passion & Perfection
      </Text>

      <UnorderedList spacing={4} fontSize="md" mb={6} textAlign="center">
        <ListItem>
          💎 <strong>Purity You Can Trust</strong> – Crafted from 100% certified
          gold, ensuring authenticity and excellence.
        </ListItem>
        <ListItem>
          💎 <strong>Designs with Meaning</strong> – Whether it’s a gift of
          love, a blessing for prosperity, or a keepsake of strength, each
          collection holds emotions as precious as gold itself.
        </ListItem>
        <ListItem>
          💎 <strong>A Commitment to You</strong> – From personalized assistance
          to seamless shopping, we make your experience as special as the
          jewelry you choose.
        </ListItem>
      </UnorderedList>

      <Flex justify="center">
        <Image
          src="/images/aboutus.png"
          alt="Golden Zest About Us Promise Image"
          width="500px"
          borderRadius="10px"
        />
      </Flex>

      <Divider my={6} />

      <Text fontSize="lg" fontWeight="semibold" mb={4} textAlign="center">
        More Than Jewelry—A Celebration of You
      </Text>

      <Text fontSize="md" mb={6} textAlign="center">
        Every sparkle of gold tells a story:
      </Text>

      <UnorderedList spacing={3} fontSize="md" mb={6} textAlign="center">
        <ListItem>
          👩‍👧 A mother passing down her cherished bangles to her daughter.
        </ListItem>
        <ListItem>
          👰 A bride wearing her first gold necklace with pride.
        </ListItem>
        <ListItem>
          💝 A friend gifting a pendant as a promise of lifelong friendship.
        </ListItem>
      </UnorderedList>

      <Text fontSize="md" mb={4} textAlign="center">
        At Golden Zest, we don’t just sell jewelry. We help you celebrate love,
        milestones, and memories that last forever.
      </Text>

      <Text fontSize="md" mb={4} textAlign="center">
        ✨ Let’s make your golden moments even more special. ✨
      </Text>

      <Text fontSize="md" textAlign="center">
        For any queries, custom requests, or just to share your jewelry story
        with us, we’re always here for you.
      </Text>
    </Box>
  );
};

export default AboutusScreen;
