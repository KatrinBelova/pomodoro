import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Container } from '@chakra-ui/react';
import Controls from '../Controls';
import Timer from '../Timer';
import { Center } from '@chakra-ui/react';
import Chip from '../common/Chip';
import { TimeSettingsContext } from '../../context/TimeSettingsContext';

const TimerWrapper = () => {
  const { status, colorSet } = useContext(ThemeContext);
  const { focus, shortBreak, longBreak } = useContext(TimeSettingsContext);

  const [isActive, setIsActive] = useState<boolean>(false);

  const play = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  return (
    <Center bg={colorSet.background} w="100%" h="100vh" color={colorSet.color}>
      <Container centerContent>
        <Chip />
        <Timer
          isActive={isActive}
          currentSatus={status}
          time={{
            focus,
            shortBreak,
            longBreak,
          }}
        />
        <Controls isActive={isActive} play={play} stop={stop} />
      </Container>
    </Center>
  );
};

export default TimerWrapper;
