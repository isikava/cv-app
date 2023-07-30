import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';

export const FormWrapper = ({ title, children, ...props }) => {
  return (
    <Card variant="outline" {...props}>
      {title && (
        <CardHeader pb={0}>
          <Heading size="xl">{title}</Heading>
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </Card>
  );
};
