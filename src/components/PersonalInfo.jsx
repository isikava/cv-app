import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FormWrapper } from './common/FormWrapper';
import { InfoWrapper } from './common/InfoWrapper';

const Form = ({ title, initialInfo, onSave, stopEditing }) => {
  const [info, setInfo] = useState(initialInfo);

  const handleChange = e => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(info);
  };

  return (
    <FormWrapper title={title} mb={4}>
      <form onSubmit={handleSubmit}>
        <VStack mb={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              type="tel"
              name="phone"
              value={info.phone}
              onChange={handleChange}
            />
          </FormControl>
        </VStack>
        <HStack>
          <Button type="submit">Save</Button>
          <Button onClick={stopEditing}>Cancel</Button>
        </HStack>
      </form>
    </FormWrapper>
  );
};

export const PersonalInfo = ({
  personal,
  onSave,
  onEdit,
  stopEditing,
  editIdx,
}) => {
  const isEditing = editIdx === 0;
  const title = 'Personal Info';

  return (
    <Box>
      {isEditing ? (
        <Form
          title={title}
          initialInfo={personal}
          onSave={onSave}
          stopEditing={stopEditing}
        />
      ) : (
        <InfoWrapper
          title={title}
          handleEdit={() => {
            onEdit(0);
          }}
        >
          <div>Name: {personal.name}</div>
          <div>Email: {personal.email}</div>
          <div>Phone: {personal.phone}</div>
        </InfoWrapper>
      )}
    </Box>
  );
};