import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react';
import { AddEditForm } from './AddEditForm';

const ExpWrapper = ({ title, onEdit, onDelete, children }) => {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={3}>
        {title}
      </Heading>
      {children}
      <br />
      <ButtonGroup>
        <Button onClick={onEdit}>Edit</Button>
        <Button variant="outline" onClick={onDelete}>
          Delete
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export const ExperienceItem = ({
  exp,
  i,
  editIdx,
  startEditing,
  stopEditing,
  onEdit,
  onDelete,
}) => {
  const isEditing = editIdx === i;
  return isEditing ? (
    <AddEditForm
      title="Edit"
      initialExp={exp}
      editIdx={editIdx}
      stopEditing={stopEditing}
      onEdit={onEdit}
    />
  ) : (
    <ExpWrapper
      title={exp.company}
      onEdit={() => startEditing(i)}
      onDelete={() => onDelete(i)}
    >
      <div>
        <b>Position:</b> {exp.position}
      </div>
      <div>
        <b>From:</b> {exp.from} <b>To:</b> {exp.to}
      </div>
      <div>
        <b>Description</b> {exp.description}{' '}
      </div>
    </ExpWrapper>
  );
};
