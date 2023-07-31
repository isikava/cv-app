import { Box, Button, ButtonGroup, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import { InfoWrapper } from '../common/InfoWrapper';
import { AddEditForm } from './AddEditForm';
import { ExperienceItem } from './ExperienceItem';

export const Experience = ({ experience, onAdd, onDelete, onEdit }) => {
  const title = 'Experience';
  const [isAdding, setIsAdding] = useState(false);
  const [editIdx, setEditIdx] = useState(-1);

  const stopEditing = () => {
    setEditIdx(-1);
  };

  return (
    <Box>
      <InfoWrapper title={title}>
        <VStack align="stretch" gap={8} mb={4}>
          {experience.map((exp, i) => (
            <ExperienceItem
              key={i}
              exp={exp}
              i={i}
              editIdx={editIdx}
              startEditing={setEditIdx}
              stopEditing={stopEditing}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </VStack>
        {isAdding ? (
          <AddEditForm
            title="Add"
            stopEditing={() => setIsAdding(false)}
            onAdd={onAdd}
          />
        ) : (
          <ButtonGroup colorScheme="blue">
            <Button onClick={() => setIsAdding(true)}>Add +</Button>
          </ButtonGroup>
        )}
      </InfoWrapper>
    </Box>
  );
};
