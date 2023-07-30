import { Box, Heading } from '@chakra-ui/react';

export const InfoWrapper = ({ title, children, ...props }) => {
  return (
    <Box p={5} {...props}>
      <Heading mb={4} size="xl">
        {title}
      </Heading>
      {children}
    </Box>
  );
};
