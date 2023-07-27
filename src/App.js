import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
    </ChakraProvider>
  );
}

export default App;
