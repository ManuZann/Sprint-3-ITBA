import { ChakraProvider } from "@chakra-ui/react";
import {CurrentUserProvider} from '../hooks/currentUser'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CurrentUserProvider>
        <Component {...pageProps} />
      </CurrentUserProvider>
    </ChakraProvider>
  );
}
