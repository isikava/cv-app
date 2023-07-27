import { Box, Button, Heading } from '@chakra-ui/react';

export const InfoWrapper = ({ title, handleEdit, children }) => {
  return (
    <Box p={5}>
      <Heading mb={4}>{title}</Heading>
      {children}
      <br />
      <Button onClick={handleEdit}>Edit</Button>
    </Box>
  );
};
