import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { Education } from './Education';
import { Experience } from './Experience/Experience';

const initialPersonal = {
  name: 'John Doe',
  email: 'doge1@example.com',
  phone: '',
  institution: '',
  spec: '',
  gradDate: '',
};

const initialCompany = {
  company: 'Google',
  position: 'Frontend',
  from: '',
  to: '',
  description: 'Job',
};

export const Main = () => {
  const [personal, setPersonal] = useState(initialPersonal);
  const [experience, setExperience] = useState([
    initialCompany,
    initialCompany,
  ]);

  const [editIdx, setEditIdx] = useState(-1);

  const stopEditing = () => {
    setEditIdx(-1);
  };

  const savePersonal = (newPersonal) => {
    setPersonal(newPersonal);
    stopEditing();
  };

  const addExperience = (newExp) => {
    setExperience([...experience, newExp]);
  };

  const deleteExperience = (index) => {
    setExperience(experience.filter((exp, i) => i !== index));
  };

  const editExperience = (nextExp, index) => {
    const editedExperience = experience.map((exp, i) =>
      i === index ? nextExp : exp
    );
    setExperience(editedExperience);
  };

  return (
    <Box as="main" p={4}>
      <PersonalInfo
        personal={personal}
        onEdit={setEditIdx}
        stopEditing={stopEditing}
        editIdx={editIdx}
        onSave={savePersonal}
      />
      <Education
        personal={personal}
        onEdit={setEditIdx}
        stopEditing={stopEditing}
        editIdx={editIdx}
        onSave={savePersonal}
      />
      <Experience
        experience={experience}
        onAdd={addExperience}
        onDelete={deleteExperience}
        onEdit={editExperience}
      />
    </Box>
  );
};
