import { Box, Heading } from '@chakra-ui/react';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const InfoWrapper = ({ title, children, ...props }: Props) => {
  return (
    <Box p={5} {...props}>
      <Heading mb={4} size="xl">
        {title}
      </Heading>
      {children}
    </Box>
  );
};
