import { FC, useContext } from 'react';
import { ButtonGroup } from '@chakra-ui/react';
import PauseIcon from '../../assets/icons/PauseIcon';
import PlayButtonIcon from '../../assets/icons/PlayButtonIcon';
import { ThemeContext } from '../../context/ThemeContext';
import NextPlayButtonIcon from '../../assets/icons/NextPlayButtonIcon';
import Button from '../common/Button';
import SetingsModal from '../SetingsModal';

interface Props {
  isActive: boolean;
  play: () => void;
  stop: () => void;
}

const Controls: FC<Props> = ({ isActive, play, stop }) => {
  const { colorSet, setNextStatus } = useContext(ThemeContext);
  const themeColor = colorSet.color;

  return (
    <ButtonGroup alignItems="center" mt={'30px'} spacing={4}>
      <SetingsModal stop={stop} play={play} />

      <Button variant="primary" onClick={isActive ? stop : play}>
        {isActive ? (
          <PauseIcon color={themeColor} />
        ) : (
          <PlayButtonIcon color={themeColor} />
        )}
      </Button>
      <Button variant="secondary" onClick={setNextStatus}>
        <NextPlayButtonIcon color={themeColor} />
      </Button>
    </ButtonGroup>
  );
};

export default Controls;
