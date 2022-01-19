import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    red: {
      900: '#DC2929',
      800: '#E2BEBE',
    },
    white: {
      900: '#FFFFFF',
      800: '#F5F6FA',
    },
    gray: {
      900: '#4B4E5C',
      800: '#8C91A9'
    },
    black: {
      900: '#161616'
    }
  },
  shadows: {
    card: '0 0 13px 0 rgba(0,0,0,0.16)'
  },
  fonts: {
    heading: 'Calibri',
    body: 'Calibri'
  },
  //TODO: remove this once main features are implemented
  styles: {
    global: (props: any) => ({
      body: {
        margin: 'auto',
        maxWidth: '1280px',
      },
    })
  }
})