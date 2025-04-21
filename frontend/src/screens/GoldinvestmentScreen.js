import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const GoldinvestmentScreen = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Gold Investment
        <Icon as={IoCheckmarkCircleSharp} boxSize={6} color="yellow.500" />
      </Heading>
      <Text fontSize="lg" mb={8} textAlign="center">
        Invest in Gold, Invest in Your Future
      </Text>
      <Flex direction="column" align="center">
        <Image src="/images/gold_gold.png" alt="Gold Jewelry" />
        <Text fontSize="md" mt={4}>
          Gold has been a symbol of wealth, security, and prosperity for
          centuries. Whether you’re buying gold jewelry for its beauty or as a
          long-term investment, understanding its purity, pricing, and market
          trends can help you make informed decisions. At Golden Zest, we are
          committed to providing you with authentic, certified gold jewelry and
          the knowledge to make the best investment choices.
        </Text>
        <Flex direction="column" align="center" mt={8}>
          <Heading as="h2" size="lg">
            Understanding Gold Purity
          </Heading>
          <Text fontSize="md">
            Gold purity is measured in karats (K), indicating the percentage of
            pure gold in the jewelry. Here’s a quick guide:
          </Text>
          <List spacing={2}>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              24K Gold (99.9% Pure) – The purest form of gold, but soft and not
              ideal for daily wear.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              22K Gold (91.6% Pure) – A popular choice for high-quality jewelry,
              offering durability and shine.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              18K Gold (75% Pure) – Stronger and more affordable, perfect for
              intricate designs and gemstone settings.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              14K &amp; 10K Gold – Durable and budget-friendly but with lower
              gold content.
            </ListItem>
          </List>
          <Text fontSize="md">
            Tip: If you’re buying jewelry for investment purposes, 22K or 24K
            gold is the best choice due to its higher gold content.
          </Text>
        </Flex>
        <Flex direction="column" align="center" mt={8}>
          <Heading as="h2" size="lg">
            How Gold Prices Are Determined
          </Heading>
          <Text fontSize="md">
            Gold prices fluctuate daily based on several factors:
          </Text>
          <List spacing={2}>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Global Market Demand &amp; Supply – Gold prices rise when demand
              increases.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Gold Purity – Higher karat gold is more expensive.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Weight &amp; Craftsmanship – Intricate designs may add to the
              price.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              International Gold Rates – Prices are influenced by the global
              gold market.
            </ListItem>
          </List>
          <Text fontSize="md">
            Check our live gold rate updates to make smart buying decisions.
          </Text>
        </Flex>
        <Flex direction="column" align="center" mt={8}>
          <Heading as="h2" size="lg">
            Gold Buying Guide: What to Look For
          </Heading>
          <Text fontSize="md">
            Here are some key things to look for when buying gold jewelry:
          </Text>
          <List spacing={2}>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Hallmark &amp; Certification – Always buy gold with proper
              certification to ensure purity.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Making Charges – Understand the labor and craftsmanship cost added
              to your jewelry.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Resale &amp; Exchange Value – Higher purity gold retains better
              value for resale or exchange.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Occasion &amp; Purpose – Choose karat value based on whether it’s
              for everyday wear, gifting, or investment.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" align="center" mt={8}>
          <Heading as="h2" size="lg">
            Why Invest in Gold Jewelry?
          </Heading>
          <Text fontSize="md">
            Here are some reasons why you should invest in gold jewelry:
          </Text>
          <List spacing={2}>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Long-Term Value – Gold jewelry appreciates over time and is a
              great financial asset.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Timeless Elegance – Unlike other investments, gold jewelry offers
              both beauty and value.
            </ListItem>
            <ListItem>
              <Icon
                as={IoCheckmarkCircleSharp}
                boxSize={4}
                color="yellow.500"
              />
              Cultural &amp; Emotional Significance – Gold is an heirloom piece
              that carries memories across generations.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" align="center" mt={8}>
          <Heading as="h2" size="lg">
            Invest in Gold. Invest in Timeless Beauty.
          </Heading>
          {/* <Link as={RouterLink} to="/shop">
            <Button size="lg" colorScheme="yellow" variant="solid" mt={4}>
              Shop Now
            </Button>
          </Link> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default GoldinvestmentScreen;
