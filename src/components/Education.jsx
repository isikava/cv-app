import { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { FormWrapper } from './common/FormWrapper';
import { InfoWrapper } from './common/InfoWrapper';

const Form = ({ title, initialInfo, onSave, stopEditing }) => {
  const [info, setInfo] = useState(initialInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
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
              autoFocus
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
        <ButtonGroup colorScheme="blue">
          <Button type="submit">Save</Button>
          <Button variant="outline" onClick={stopEditing}>
            Cancel
          </Button>
        </ButtonGroup>
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
        <InfoWrapper title={title}>
          <div>
            <b>Institution:</b> {personal.institution}
          </div>
          <div>
            <b>Specialization:</b> {personal.spec}
          </div>
          <div>
            <b>Graduation date:</b> {personal.gradDate}
          </div>
          <br />
          <Button onClick={() => onEdit(1)}>Edit</Button>
        </InfoWrapper>
      )}
    </Box>
  );
};
