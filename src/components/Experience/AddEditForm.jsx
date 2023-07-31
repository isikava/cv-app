import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { FormWrapper } from '../common/FormWrapper';

export const AddEditForm = ({
  title,
  editIdx,
  initialExp,
  onAdd,
  onEdit,
  stopEditing,
}) => {
  const [exp, setExp] = useState(
    initialExp || {
      company: '',
      position: '',
      from: '',
      to: '',
      description: '',
    }
  );
  const isAddMode = !initialExp;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExp({
      ...exp,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isAddMode ? onAdd(exp) : onEdit(exp, editIdx);
    stopEditing();
  };

  return (
    <FormWrapper title={title} mb={4}>
      <form onSubmit={handleSubmit}>
        <VStack mb={4} align={['stretch', 'flex-start']}>
          <FormControl>
            <FormLabel>Company</FormLabel>
            <Input
              type="text"
              name="company"
              value={exp.company}
              onChange={handleChange}
              autoFocus
            />
          </FormControl>
          <FormControl>
            <FormLabel>Position</FormLabel>
            <Input
              type="text"
              name="position"
              value={exp.position}
              onChange={handleChange}
            />
          </FormControl>
          <Stack direction={['column', 'row']}>
            <FormControl>
              <FormLabel>From</FormLabel>
              <Input
                type="date"
                name="from"
                value={exp.from}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>To</FormLabel>
              <Input
                type="date"
                name="to"
                value={exp.to}
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Yo"
              name="description"
              value={exp.description}
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
