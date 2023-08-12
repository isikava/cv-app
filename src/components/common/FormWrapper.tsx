import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const FormWrapper = ({ title, children, ...props }: Props) => {
  return (
    <Card variant="outline" {...props}>
      <CardHeader pb={0}>
        <Heading size="xl">{title}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
