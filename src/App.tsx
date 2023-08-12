import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Main } from './components/Main';
// @ts-ignore
import data from './data';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main data={data} />
    </ChakraProvider>
  );
}

export default App;
