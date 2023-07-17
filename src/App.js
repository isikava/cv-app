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
import { useState } from 'react';

export const Header = () => {
  return (
    <Box as="header" p={4} bg="gray.600" color="white">
      <Heading as="h1">CV Application</Heading>
    </Box>
  );
};

export const Section = ({ title, children, ...props }) => {
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
      {children}
    </Box>
  );
};

export const Form = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      <VStack>{children}</VStack>
      <Button type="submit">Save</Button>
    </form>
  );
};

export const Info = ({ handleEdit, children }) => {
  return (
    <div>
      {children}
      <br />
      <Button onClick={handleEdit}>Edit</Button>
    </div>
  );
};

const initialPersonal = { name: '', email: '', phone: '' };

export const Main = () => {
  const [personal, setPersonal] = useState(initialPersonal);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(personal);
    setIsEditing(false);
  };

  return (
    <Box as="main" p={4}>
      <Section title="Personal info" mb={6}>
        {isEditing ? (
          <Form handleSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={personal.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={personal.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                type="tel"
                name="phone"
                value={personal.phone}
                onChange={handleChange}
              />
            </FormControl>
          </Form>
        ) : (
          <Info
            handleEdit={() => {
              setIsEditing(true);
            }}
          >
            <div>Name: {personal.name}</div>
            <div>Email: {personal.email}</div>
            <div>Phone: {personal.phone}</div>
          </Info>
        )}
      </Section>

      <Section title="Section" mb={6}></Section>

      {/* <FormSection title="Education" mb={6}>
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
        <Button>Save</Button>
      </FormSection> */}
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
