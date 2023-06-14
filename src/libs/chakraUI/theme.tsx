import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `font-family: 'Roboto', sans-serif;
            font-family: 'Roboto Flex', sans-serif;`,
    body: `font-family: 'Roboto', sans-serif;
            font-family: 'Roboto Flex', sans-serif;`,
  },
  components: {
    Button: {
      variants: {
        primary: {
          px: '40px',
          py: '32px',
          borderRadius: '32px',
          minWidth: '128px',
          height: '96px',
          baseStyle: {
            _hover: {
              background: 'none',
            },
          },
        },
        secondary: {
          px: '24px',
          py: '24px',
          borderRadius: '24px',
          minWidth: '80px',
          height: '80px',
          baseStyle: {
            _hover: {
              background: 'none',
            },
          },
        },
      },
    },
    Modal: {
      dialog: {
        borderRadius: '24px',
      },
    },
  },
});

export default theme;
