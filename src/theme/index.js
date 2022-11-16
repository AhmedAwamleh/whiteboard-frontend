import { extendTheme } from "@chakra-ui/react";

export const newTheme = extendTheme({
  colors: {
    primary: {
      100: '#7DE5ED',
      200: '#81C6E8',
      300: '#5DA7DB',
      400: '#5837D0'
    },
    secondery: {
      100: '#EAEAEA',
      200: '#3C4048',
      300: '#B2B2B2',
      400: '#EAEAEA'
    },
    warning: {
      100: '#CF0A0A',
      200: '#DC5F00'
    }
  },
  textStyles: {
    h1: {
      fontSize: ['48px', '172px'],
      fontWeight: 'bold',
      letterSpacing: '8px'
    },
    p: {
      fontSize: '100px'
    }
  },
  components: {
    Button: {
      sizes: {

        sm: {
          fontSize: 'md',
          color: 'white'
        }
      },
      variants: {
        base: {
          bg: 'warning.100',
          fontSize: 'md'
        },
        sm: {
          bg: 'primary.300',
          fontSize: 'lg'
        },
        md: {
          bg: 'primary.400',
          fontSize: 'xl'
        },
        lg: {
          bg: 'secondery.400',
          fontSize: 'xl'
        }
      },
      defaultProps: {
        size: 'lg',
        variant: 'sm',
        colorScheme: 'green',
      },
    },
    Text: {
      variants: {
        base: {
          color: 'warning.100',
          fontSize: 'md'
        },
        sm: {
          color: 'warning.100',
          fontSize: 'lg'
        },
        md: {
          color: 'primary.400',
          fontSize: 'xl'
        }
      }
    }
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
})