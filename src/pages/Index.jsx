import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, IconButton, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Index = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Recipe Share
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <Button as={Link} to="/submit-recipe" colorScheme="teal" size="lg">
          Submit a Recipe
        </Button>
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