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
            <FormLabel>Institution</FormLabel>
            <Input
              type="text"
              name="institution"
              value={info.institution}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Specialization</FormLabel>
            <Input
              type="text"
              name="spec"
              value={info.spec}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Graduation date</FormLabel>
            <Input
              type="date"
              name="gradDate"
              value={info.gradDate}
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

export const Education = ({
  personal,
  onSave,
  onEdit,
  stopEditing,
  editIdx,
}) => {
  const isEditing = editIdx === 1;
  const title = 'Education';

  return (
    <Box>
      {isEditing ? (
        <Form
          title={title}
          initialInfo={personal}
          onSave={onSave}
          stopEditing={stopEditing}
        ></Form>
      ) : (
        <InfoWrapper
          title={title}
          handleEdit={() => {
            onEdit(1);
          }}
        >
          <div>Institution: {personal.institution}</div>
          <div>Specialization: {personal.spec}</div>
          <div>Graduation date: {personal.gradDate}</div>
        </InfoWrapper>
      )}
    </Box>
  );
};
