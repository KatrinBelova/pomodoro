import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

interface TimeSettingsContextProps {
  focus: number;
  shortBreak: number;
  longBreak: number;
  setFocusTime: Dispatch<SetStateAction<number>>;
  setBreakTime: Dispatch<SetStateAction<number>>;
  setLongBreakTime: Dispatch<SetStateAction<number>>;
}

export const TimeSettingsContext = createContext<TimeSettingsContextProps>({
  focus: 0,
  shortBreak: 0,
  longBreak: 0,
  setFocusTime: () => null,
  setBreakTime: () => null,
  setLongBreakTime: () => null,
});

export const TimeSettingsProvider = ({ children }: PropsWithChildren) => {
  const [focus, setFocusTime] = useState<number>(10);
  const [shortBreak, setBreakTime] = useState<number>(3);
  const [longBreak, setLongBreakTime] = useState<number>(6);

  return (
    <TimeSettingsContext.Provider
      value={{
        focus,
        shortBreak,
        longBreak,
        setFocusTime,
        setBreakTime,
        setLongBreakTime,
      }}
    >
      {children}
    </TimeSettingsContext.Provider>
  );
};
