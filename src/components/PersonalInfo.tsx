import { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { FormWrapper } from './common/FormWrapper';
import { InfoWrapper } from './common/InfoWrapper';

type FormProps = {
  title: string;
  initialInfo: IPersonal;
  onSave: OnSaveType;
  stopEditing: StopEditingType;
};

type PersonalInfoProps = {
  personal: IPersonal;
  onSave: OnSaveType;
  onEdit: (i: number) => void;
  stopEditing: StopEditingType;
  editIdx: number;
};

const Form = ({ title, initialInfo, onSave, stopEditing }: FormProps) => {
  const [info, setInfo] = useState(initialInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(info);
  };

  const isNameErr = info.name === '';
  const isEmailErr = info.email === '';

  return (
    //@ts-ignore
    <FormWrapper title={title} mb={4}>
      <form onSubmit={handleSubmit}>
        <VStack mb={4}>
          <FormControl isInvalid={isNameErr} isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
              autoFocus
            />
            {isNameErr && <FormErrorMessage>Name is required</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={isEmailErr} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
            />
            {isEmailErr && (
              <FormErrorMessage>Email is required</FormErrorMessage>
            )}
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

export const PersonalInfo = ({
  personal,
  onSave,
  onEdit,
  stopEditing,
  editIdx,
}: PersonalInfoProps) => {
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
        <InfoWrapper title={title}>
          <div>
            <b>Full Name:</b> {personal.name}
          </div>
          <div>
            <b>Email:</b> {personal.email}
          </div>
          <div>
            <b>Phone:</b> {personal.phone}
          </div>
          <br />
          <Button onClick={() => onEdit(0)}>Edit</Button>
        </InfoWrapper>
      )}
    </Box>
  );
};
