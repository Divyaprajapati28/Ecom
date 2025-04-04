import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Select,
  Text,
  Textarea,
  Input,
  useDisclosure,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import {
  createProductReview,
  listProductDetails,
} from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";
import ProductTable from "../components/ProductTable";
import axios from "axios";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");

  const [qty, setQty] = useState(1);
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const { id: productId } = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle review submission
  const handleSubmit = async () => {
    if (!comment || !image) {
      alert("Please provide both a comment and an image.");
      return;
    }

    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("rating", rating);
    formData.append("image", image); // image should be a File object

    await axios.post(`/api/products/${productId}/reviews`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
  };

  useEffect(() => {
    if (successProductReview) {
      alert("Review submitted");
      setRating(1);
      setComment("");
      setImage("");
      setPreview("");
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(listProductDetails(id));
  }, [id, dispatch, successProductReview]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(id, { rating, comment, image }));
  };

  return (
    <>
      <Flex mb="5">
        <Button as={RouterLink} to="/" colorScheme="gray">
          Go Back
        </Button>
      </Flex>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <>
          <Grid templateColumns="5fr 4fr 3fr" gap="10">
            {/* Column 1 */}
            <Image
              src={product.image}
              alt={product.name}
              borderRadius="md"
              h={"400px"}
              w={"400px"}
            />

            {/* Column 2 */}
            <Flex direction="column">
              <Heading as="h5" fontSize="base" color="gray.500">
                {product.brand}
              </Heading>

              <Heading as="h2" fontSize="4xl" mb="4">
                {product.name}
              </Heading>

              <Rating
                value={product.rating}
                color="yellow.500"
                text={`${product.numReviews} reviews`}
              />

              <Heading
                as="h5"
                fontSize="4xl"
                fontWeight="bold"
                color="teal.600"
                my="5"
                mb="4"
              >
                ₹{product.price}
              </Heading>

              <Text>{product.description}</Text>
            </Flex>

            {/* Column 3 */}
            <Flex direction="column">
              <Flex justifyContent="space-between" py="2">
                <Text>Price:</Text>
                <Text fontWeight="bold">₹{product.price}</Text>
              </Flex>

              <Flex justifyContent="space-between" py="2">
                <Text>Status:</Text>
                <Text fontWeight="bold">
                  {product.countInStock > 0 ? "In Stock" : "Not available"}
                </Text>
              </Flex>

              {product.countInStock > 0 && (
                <Flex justifyContent="space-between" py="2">
                  <Text>Qty:</Text>
                  <Select
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    width="30%"
                  >
                    {[...Array(product.countInStock).keys()].map((i) => (
                      <option value={i + 1} key={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Select>
                </Flex>
              )}

              <Button
                onClick={addToCartHandler}
                bg="gray.800"
                colorScheme="teal"
                my="2"
                textTransform="uppercase"
                letterSpacing="wide"
                isDisabled={product.countInStock === 0}
              >
                Add to cart
              </Button>
            </Flex>
          </Grid>
          <ProductTable />
          {/* Review Display and Form */}
          <Box
            p="10"
            bg="whiteAlpha.800"
            rounded="md"
            mt="10"
            borderColor="gray.300"
          >
            <Heading as="h3" size="lg" mb="6">
              Write a review
            </Heading>

            {product.reviews && product.reviews.length === 0 && (
              <Message>No Reviews</Message>
            )}

            {product.reviews && product.reviews.length !== 0 && (
              <Box p="4" bgColor="white" rounded="md" mb="1" mt="5">
                {product.reviews.map((review) => (
                  <Flex direction="column" key={review._id} mb="5">
                    <Flex justifyContent="space-between">
                      <Flex alignItems="center">
                        <Image
                          src={review.image}
                          alt={review.name}
                          borderRadius="md"
                          w="100%"
                          h="200px"
                          objectFit="cover"
                        />
                      </Flex>
                      <Text fontSize="lg">
                        <strong>{review.name}</strong>
                      </Text>
                      <Rating value={review.rating} />
                    </Flex>
                    <Text mt="2">{review.comment}</Text>
                  </Flex>
                ))}
              </Box>
            )}

            {errorProductReview && (
              <Message type="error">{errorProductReview}</Message>
            )}

            {userInfo ? (
              <form onSubmit={submitHandler}>
                <FormControl id="rating" mb="3">
                  <FormLabel>Rating</FormLabel>
                  <Select
                    placeholder="Select Option"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option>Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Okay</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </Select>
                </FormControl>

                <FormControl id="comment" mb="3">
                  <FormLabel>Comment</FormLabel>
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></Textarea>
                </FormControl>
                <FormLabel mt={4}>Upload Image</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  mb={4}
                />

                {/* Show preview if image is uploaded */}
                {preview && (
                  <Box mt={3}>
                    <Image
                      src={preview}
                      alt="Preview"
                      borderRadius="md"
                      w="200px"
                      h="200px"
                      objectFit="cover"
                      mb={3}
                    />
                  </Box>
                )}

                <Button colorScheme="teal" type="submit">
                  Post Review
                </Button>
              </form>
            ) : (
              <Message>Please login to write a review</Message>
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default ProductScreen;
