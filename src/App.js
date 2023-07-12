import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
  theme,
} from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box as="header" p={4} bg="gray.600" color="white">
      <Heading as="h1">CV Application</Heading>
    </Box>
  );
};

export const FormSection = ({ title, children, ...props }) => {
  return (
    <Box
      as="section"
      p={4}
      shadow="md"
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
      {...props}
    >
      <Heading mb={4}>{title}</Heading>
      <VStack>{children}</VStack>
    </Box>
  );
};

export const Main = () => {
  return (
    <Box as="main" p={4}>
      <FormSection title="Personal info" mb={6}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
          <Input type="tel" />
        </FormControl>
      </FormSection>
      <FormSection title="Education" mb={6}>
        <FormControl>
          <FormLabel>Institution</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Specialization</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Graduation date</FormLabel>
          <Input type="date" />
        </FormControl>
      </FormSection>
      <Button>Submit</Button>
    </Box>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
    </ChakraProvider>
  );
}

export default App;
