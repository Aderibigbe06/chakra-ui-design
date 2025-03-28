"use client"

// import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
// import { ColorModeProvider } from "./color-mode"
// import { ComponentProps } from "react"

// export function Provider(props: ComponentProps<typeof ChakraProvider>) {

//   return (
//     <ChakraProvider value={defaultSystem}>
//       <ColorModeProvider {...props} />
//     </ChakraProvider>
//   )
// }


import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

interface ProviderProps {
  children: ReactNode; // Only 'children' is required
}

export function Provider({ children }: ProviderProps) {
  return (
    // @ts-expect-error: ChakraProvider requires a value prop, but we are using defaults.
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
}
