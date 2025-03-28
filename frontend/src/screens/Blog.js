import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

const Blog = () => {
  return (
    <>
      <Heading as="h1" size="xl" mb={4} textAlign="center" mt={8}>
        <title>Blog - Golden Zest</title>
      </Heading>
      <Container maxW="container.md" py={5}>
        <Flex justify="center">
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb={4}>
              Golden Zest Blog{" "}
              <span role="img" aria-label="sparkles">
                ✨
              </span>
            </Heading>
            <Text fontSize="lg" mb={8}>
              Your Guide to Timeless Gold Jewelry <br />
              Gold jewelry is more than just an accessory—it's a symbol of love,
              tradition, and elegance that transcends generations. At Golden
              Zest, we understand the deep emotional connection people have with
              gold, and our blog is here to celebrate that. Whether you're
              looking for expert styling tips, the latest trends, or insights on
              caring for your cherished pieces, you'll find it all right here.
            </Text>
            <Heading as="h2" size="lg" mb={4}>
              What You'll Discover in Our Blog
            </Heading>
            <List spacing={3}>
              <ListItem>
                <span role="img" aria-label="jewelry">
                  ✨
                </span>{" "}
                Jewelry Trends & Inspiration
              </ListItem>
              <ListItem>Styling Guides</ListItem>
              <ListItem>Gold Care &amp; Maintenance</ListItem>
              <ListItem>Buying &amp; Investment Tips</ListItem>
              <ListItem>Cultural &amp; Emotional Stories</ListItem>
            </List>
            <Text fontSize="lg" mt={8} mb={4}>
              Why Follow Our Blog? At Golden Zest, we believe jewelry is not
              just about beauty—it's about emotion, memories, and timeless
              elegance. Our blog is crafted with love to help you wear, cherish,
              and celebrate gold in the most meaningful way.
              <br />
              <span role="img" aria-label="sparkles">
                ✨
              </span>{" "}
              Stay Inspired. Stay Golden.{" "}
              <span role="img" aria-label="sparkles">
                ✨
              </span>
            </Text>
            <Link to="/" variant="link">
              Go back to home page
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Blog;
