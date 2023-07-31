import { Box, Container } from '@chakra-ui/react';
import { useState } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { Education } from './Education';
import { Experience } from './Experience/Experience';

export const Main = ({ data }) => {
  const [personal, setPersonal] = useState(data.initialPersonal);
  const [experience, setExperience] = useState(data.initialExp);
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
    <Box as="main">
      <Container maxW="1200px">
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
      </Container>
    </Box>
  );
};
