import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";
    if (!image) newErrors.image = "Image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      description,
      image: URL.createObjectURL(image),
      ratings: [],
    };

    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    localStorage.setItem("recipes", JSON.stringify([...existingRecipes, newRecipe]));

    navigate("/");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Submit Your Recipe
        </Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.title}>
              <FormLabel htmlFor="title">Recipe Title</FormLabel>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.description}>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.image}>
              <FormLabel htmlFor="image">Image</FormLabel>
              <Input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
              <FormErrorMessage>{errors.image}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Submit Recipe
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default SubmitRecipe;