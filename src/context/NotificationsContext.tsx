import { createContext, useState, PropsWithChildren } from 'react';
import { useToast } from '@chakra-ui/react';

interface NotificationsContextProps {
  isAlertOn: boolean;
  handleAlertMode: () => void;
  notify: (message: string) => void;
}

export const NotificationsContext = createContext<NotificationsContextProps>({
  isAlertOn: true,
  handleAlertMode: () => null,
  notify: () => null,
});

export const NotificationsContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [isAlertOn, setIsAlertOn] = useState<boolean>(true);

  const handleAlertMode = () => {
    setIsAlertOn((prevState) => !prevState);
  };

  const toast = useToast();

  const notify = (message: string, duration?: number) => {
    if (isAlertOn) {
      toast({
        title: message,
        status: 'success',
        duration: duration || 1000,
        isClosable: true,
      });
    }
  };

  return (
    <NotificationsContext.Provider
      value={{ isAlertOn, handleAlertMode, notify }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
