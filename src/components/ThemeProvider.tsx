import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
});

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
