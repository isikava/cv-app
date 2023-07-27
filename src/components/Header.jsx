import { Box, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box as="header" p={4} bg="gray.600" color="white">
      <Heading as="h1">CV Application</Heading>
    </Box>
  );
};
