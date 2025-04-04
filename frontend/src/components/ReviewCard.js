import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { StarIcon } from "@chakra-ui/icons";

const ReviewCard = () => {
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  return (
    <Box display="flex" gap={6} overflowX="auto" p={5}>
      {loading ? (
        <Spinner size="xl" />
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : product?.reviews?.length > 0 ? (
        product.reviews.map((review, index) => (
          <Box
            key={index}
            bg="white"
            boxShadow="lg"
            borderRadius="md"
            w="300px"
            p={5}
            transform={`rotate(${index % 2 === 0 ? "-5deg" : "5deg"})`}
            transition="transform 0.3s"
            _hover={{ transform: "rotate(0deg)", boxShadow: "xl" }}
          >
            <Image
              src={review.image} // Using product image
              alt={review.name}
              borderRadius="md"
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <VStack align="start" mt={4}>
              <Text fontSize="lg" fontWeight="bold">
                {review.name}
              </Text>
              <HStack>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <Icon
                      key={i}
                      as={StarIcon}
                      color={i < review.rating ? "yellow.400" : "gray.300"}
                    />
                  ))}
              </HStack>
              <Text fontSize="sm" color="gray.600">
                {review.comment}
              </Text>
            </VStack>
          </Box>
        ))
      ) : (
        <Text>No reviews available.</Text>
      )}
    </Box>
  );
};

export default ReviewCard;
