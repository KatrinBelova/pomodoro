import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from './context/ThemeContext';
import './App.scss';
import TimerWrapper from './components/TimerWrapper';
import theme from './libs/chakraUI/theme';
import { TimeSettingsProvider } from './context/TimeSettingsContext';
import { NotificationsContextProvider } from './context/NotificationsContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NotificationsContextProvider>
        <ThemeProvider>
          <TimeSettingsProvider>
            <TimerWrapper />
          </TimeSettingsProvider>
        </ThemeProvider>
      </NotificationsContextProvider>
    </ChakraProvider>
  );
}

export default App;
