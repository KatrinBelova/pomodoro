import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { darkTheme, lightTheme } from '../theme';
import { StateValues, State } from '../types/states';
import { ColorSetOptions, Mode, Theme } from '../types/theme';
import { NotificationsContext } from './NotificationsContext';

const STATUSES = [StateValues.FOCUS, StateValues.BREAK, StateValues.LONG_BREAK];

interface ThemeContextProps {
  mode: Mode;
  theme: Theme;
  toggleTheme: () => void;
  status: State;
  setNextStatus: () => void;
  colorSet: ColorSetOptions;
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: 'light',
  theme: lightTheme,
  toggleTheme: () => null,
  status: StateValues.FOCUS,
  setNextStatus: () => null,
  colorSet: lightTheme.focus,
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const userMode = localStorage.getItem('mode') as Mode;
  const standartTheme = userMode === 'light' ? lightTheme : darkTheme;

  const [mode, setMode] = useState<Mode>(userMode || 'light');
  const [theme, setTheme] = useState<Theme>(standartTheme);
  const [status, setStatus] = useState<State>(StateValues.FOCUS);
  const [colorSet, setColorSet] = useState<ColorSetOptions>(
    lightTheme['focus']
  );

  const { notify } = useContext(NotificationsContext);

  useEffect(() => {
    setColorSet(theme[status]);
  }, [status, mode]);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const toggleTheme = () => {
    toggleMode();
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  const setNextStatus = () => {
    const idx = STATUSES.findIndex((item) => item === status);
    const newStatus = idx === 2 ? STATUSES[0] : STATUSES[idx + 1];

    setStatus(newStatus);
    notify(newStatus);
  };

  return (
    <ThemeContext.Provider
      value={{ mode, theme, toggleTheme, status, setNextStatus, colorSet }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
