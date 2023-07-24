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

const PersonalInfo = ({ personal, handleChange }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(personal);
    setIsEditing(false);
  };

  return (
    <>
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
    </>
  );
};

const Education = ({ personal, handleChange }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(personal);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <Form handleSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Institution</FormLabel>
            <Input
              type="text"
              name="institution"
              value={personal.institution}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Specialization</FormLabel>
            <Input
              type="text"
              name="spec"
              value={personal.spec}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Graduation date</FormLabel>
            <Input
              type="date"
              name="gradDate"
              value={personal.gradDate}
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
          <div>Institution: {personal.institution}</div>
          <div>Specialization: {personal.spec}</div>
          <div>Graduation date: {personal.gradDate}</div>
        </Info>
      )}
    </>
  );
};

const initialPersonal = {
  name: 'John Doe',
  email: 'doge1@example.com',
  phone: '',
  institution: '',
  spec: '',
  gradDate: '',
};

export const Main = () => {
  const [personal, setPersonal] = useState(initialPersonal);

  const handleChange = e => {
    const { name, value } = e.target;

    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  return (
    <Box as="main" p={4}>
      <Section title="Personal info" mb={4}>
        <PersonalInfo personal={personal} handleChange={handleChange} />
      </Section>

      <Section title="Education" mb={6}>
        <Education personal={personal} handleChange={handleChange} />
      </Section>
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
