import { FC, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { State } from '../../types/states';
import { TimeSettings } from '../../types/timeSettings';
import { formatTime } from '../../utils/formatTime';
import { Box } from '@chakra-ui/react';
import styles from './Timer.module.scss';

interface Props {
  isActive: boolean;
  currentSatus: State;
  time: TimeSettings;
}

const Timer: FC<Props> = ({ isActive, currentSatus, time }) => {
  const { setNextStatus } = useContext(ThemeContext);

  const [timer, setTimer] = useState<number>(1);

  const interval = useRef<NodeJS.Timer>();

  const stopInterval = () => {
    clearInterval(interval.current);
  };

  useEffect(() => {
    setTimer(time[currentSatus]);
  }, [currentSatus]);

  useEffect(() => {
    if (isActive) {
      interval.current = setInterval(() => {
        setTimer((prevState) => prevState - 1);
      }, 1000);
    } else {
      stopInterval();
    }

    return () => {
      stopInterval();
    };
  }, [isActive]);

  useEffect(() => {
    if (timer == -1) {
      setNextStatus();
    }
  }, [timer]);

  return (
    <Box className={styles.timer} fontWeight={isActive ? 800 : 200}>
      {formatTime(timer)}
    </Box>
  );
};

export default Timer;
