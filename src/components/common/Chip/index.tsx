import { FC, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { StateValues } from '../../../types/states';
import { Box, Text } from '@chakra-ui/react';
import BrainIcon from '../../../assets/icons/BrainIcon';
import CupIcon from '../../../assets/icons/CupIcon';

const Chip: FC = () => {
  const { status, colorSet } = useContext(ThemeContext);

  const content = {
    [StateValues.FOCUS]: {
      icon: <BrainIcon color={colorSet.color} />,
      text: 'Focus',
    },
    [StateValues.BREAK]: {
      icon: <CupIcon color={colorSet.color} />,
      text: 'Short Break',
    },
    [StateValues.LONG_BREAK]: {
      icon: <CupIcon color={colorSet.color} />,
      text: 'Long Break',
    },
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      mb={'32px'}
      p={'8px 16px'}
      borderWidth={2}
      borderRadius={'99px'}
      backgroundColor={colorSet.background}
      borderColor={colorSet.color}
    >
      <Box mr={'9px'}>{content[status].icon}</Box>
      <Text fontSize={'24px'} fontWeight={500} lineHeight={'28px'}>
        {content[status].text}
      </Text>
    </Box>
  );
};

export default Chip;
