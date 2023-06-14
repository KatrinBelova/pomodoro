import { FC, ReactNode, useContext, useState } from 'react';
import { Flex, Spacer, Box, Switch } from '@chakra-ui/react';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import Modal from '../common/Modal';
import NumericInput from '../common/NumericInput';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../common/Button';
import { TimeSettingsContext } from '../../context/TimeSettingsContext';
import { NotificationsContext } from '../../context/NotificationsContext';

interface ModalProps {
  play: () => void;
  stop: () => void;
}
interface WrapperProps {
  control?: ReactNode;
  label: string;
}

const SetingsModal: FC<ModalProps> = ({ stop, play }) => {
  const { mode, colorSet, toggleTheme } = useContext(ThemeContext);
  const {
    focus,
    shortBreak,
    longBreak,
    setFocusTime,
    setBreakTime,
    setLongBreakTime,
  } = useContext(TimeSettingsContext);
  const { isAlertOn, handleAlertMode } = useContext(NotificationsContext);

  const themeColor = colorSet.color;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    isOpen ? play() : stop();
    setIsOpen((prevState) => !prevState);
  };

  const Wrapper: FC<WrapperProps> = ({ control, label }) => (
    <Flex minWidth="max-content" alignItems="center" gap="2" mb={'24px'}>
      <Box>{label}</Box>
      <Spacer />
      {control}
    </Flex>
  );

  return (
    <>
      <Button variant="secondary" onClick={handleModal}>
        <SettingsIcon color={themeColor} />
      </Button>

      <Modal isOpen={isOpen} onClose={handleModal} title="Settings">
        <form>
          <Wrapper
            label="Dark mode"
            control={
              <Switch isChecked={mode === 'dark'} onChange={toggleTheme} />
            }
          />
          <Wrapper
            label="Focus length"
            control={
              <NumericInput
                value={focus}
                onChange={(v) => setFocusTime(Number(v))}
              />
            }
          />
          <Wrapper
            label="Short break length"
            control={
              <NumericInput
                value={shortBreak}
                onChange={(v) => setBreakTime(Number(v))}
              />
            }
          />
          <Wrapper
            label="Long break length"
            control={
              <NumericInput
                value={longBreak}
                onChange={(v) => setLongBreakTime(Number(v))}
              />
            }
          />
          <Wrapper
            label="Notifications"
            control={
              <Switch isChecked={isAlertOn} onChange={handleAlertMode} />
            }
          />
        </form>
      </Modal>
    </>
  );
};

export default SetingsModal;
