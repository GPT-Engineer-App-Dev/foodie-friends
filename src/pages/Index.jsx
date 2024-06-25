import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "/images/spaghetti-carbonara.jpg",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    description: "Chunks of grilled chicken (tikka) cooked in a creamy, spiced tomato sauce.",
    image: "/images/chicken-tikka-masala.jpg",
  },
  {
    id: 3,
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake perfect for any occasion.",
    image: "/images/chocolate-cake.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Recipe Share
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={10}>
          {recipes.map((recipe) => (
            <Box key={recipe.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {recipe.title}
                </Heading>
                <Text mb={4}>{recipe.description}</Text>
                <IconButton aria-label="Like" icon={<FaHeart />} size="lg" colorScheme="red" />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;