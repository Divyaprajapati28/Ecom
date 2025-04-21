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
import { StarIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const ReviewCard = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Combine all reviews from all products
  const allReviews = products
    ?.flatMap((product) =>
      product.reviews.map((review) => ({
        ...review,
        productImage: product.image,
        createdAt: review.createdAt || product.createdAt, // fallback if review doesn't have timestamp
      }))
    )
    .filter(Boolean)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // sort newest first
    .slice(0, 5); // take only the latest 5// Remove any undefined/null

  return (
    <Box display="flex" gap={6} overflowX="auto" p={5}>
      {loading ? (
        <Spinner size="xl" />
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : allReviews?.length > 0 ? (
        allReviews.map((review, index) => (
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
              src={review.image || review.productImage}
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
