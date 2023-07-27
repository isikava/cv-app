import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';

export const FormWrapper = ({ title, children, ...props }) => {
  return (
    <Card variant="outline" {...props}>
      <CardHeader pb={0}>
        <Heading>{title}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
