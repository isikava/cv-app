import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { Education } from './Education';

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

  const [editIdx, setEditIdx] = useState(-1);

  const startEditing = i => {
    setEditIdx(i);
  };

  const stopEditing = () => {
    setEditIdx(-1);
  };

  const handleSave = newPersonal => {
    setPersonal(newPersonal);
    stopEditing();
  };

  return (
    <Box as="main" p={4}>
      <PersonalInfo
        personal={personal}
        onEdit={startEditing}
        stopEditing={stopEditing}
        editIdx={editIdx}
        onSave={handleSave}
      />
      <Education
        personal={personal}
        onEdit={startEditing}
        stopEditing={stopEditing}
        editIdx={editIdx}
        onSave={handleSave}
      />
    </Box>
  );
};
