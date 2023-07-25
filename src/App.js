import React from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
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
    <Card variant="outline" {...props}>
      <CardHeader pb={0}>
        <Heading>{title}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export const Form = ({ title, handleSubmit, children }) => {
  return (
    <Section title={title} mb={4}>
      <form onSubmit={handleSubmit}>
        <VStack mb={4}>{children}</VStack>
        <Button type="submit">Save</Button>
      </form>
    </Section>
  );
};

export const Info = ({ title, handleEdit, children }) => {
  return (
    <Box p={5}>
      <Heading mb={4}>{title}</Heading>
      {children}
      <br />
      <Button onClick={handleEdit}>Edit</Button>
    </Box>
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
    <Box>
      {isEditing ? (
        <Form title="Personal info" handleSubmit={handleSubmit}>
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
          title="Personal info"
          handleEdit={() => {
            setIsEditing(true);
          }}
        >
          <div>Name: {personal.name}</div>
          <div>Email: {personal.email}</div>
          <div>Phone: {personal.phone}</div>
        </Info>
      )}
    </Box>
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
    <Box>
      {isEditing ? (
        <Form title="Education" handleSubmit={handleSubmit}>
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
          title="Education"
          handleEdit={() => {
            setIsEditing(true);
          }}
        >
          <div>Institution: {personal.institution}</div>
          <div>Specialization: {personal.spec}</div>
          <div>Graduation date: {personal.gradDate}</div>
        </Info>
      )}
    </Box>
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
      <PersonalInfo personal={personal} handleChange={handleChange} />
      <Education personal={personal} handleChange={handleChange} />
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
