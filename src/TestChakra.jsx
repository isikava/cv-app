import { Button } from '@chakra-ui/button';
import { Box, Flex, Grid, Text } from '@chakra-ui/layout';
import React from 'react';

export const TestChakra = () => {
  return (
    <div>
      <Button
        as="a"
        target="_blank"
        variant="outline"
        href="https://chakra-ui.com"
      >
        Hello
      </Button>
      <Box m={2} bg="tomato" display={{ base: 'none', md: 'block' }}>
        Tomato
      </Box>
      <Box maxW="960px" mx="auto">
        23
      </Box>
      <Box
        w="100%"
        h="200px"
        bgGradient="linear(to-t, green.200, pink.500)"
        fontSize="xx-large"
      >
        <Text
          //   fontSize="md"
          textAlign={['left', 'center']}
          textDecoration="underline"
        >
          Medium
        </Text>
        <Text fontSize="sm" textAlign={['left', 'center']}>
          Small
        </Text>
      </Box>
      <Box w="100%" h={1} />
      <Box w={256} height={32} />
      <Box fontSize={['sm', 'md', 'lg', 'xl']}>Font Size</Box>
      <Flex align="center" justify="center" height="md">
        <Text fontSize={32} py={8}>
          Flex container
        </Text>
      </Flex>
      <Grid
        gap={2}
        autoFlow="row dense"
        templateColumns="1fr 1fr"
        templateRows="1fr 1fr"
        justifyItems="center"
      >
        <Box border="1px" borderColor="gray.200">
          Grid
        </Box>
        <Box pos="absolute" top="0" right={0}>
          Grid
        </Box>
        <Box
          boxShadow="base"
          p="6"
          rounded="md"
          bg="white"
          _hover={{ fontWeight: 'semibold' }}
        >
          Grid
        </Box>
        <Box _before={{ content: '"🙂"', display: 'inline-block', mr: '5px' }}>
          Before
        </Box>
      </Grid>
    </div>
  );
};
