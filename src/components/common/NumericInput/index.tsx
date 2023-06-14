import { FC, useContext } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  NumberInputProps,
} from '@chakra-ui/react';
import { ThemeContext } from '../../../context/ThemeContext';

const borderColorLight = 'rgb(0,0,0, 0.15)';
const borderColorDark = 'rgb(255,255,255, 0.15)';

interface Props extends NumberInputProps {
  wrapperWidth?: string | number;
}

const NumericInput: FC<Props> = ({ wrapperWidth = '96px', value, ...rest }) => {
  const { mode, colorSet } = useContext(ThemeContext);
  const mainColor = colorSet.color;
  const borderColor = mode === 'light' ? borderColorLight : borderColorDark;

  return (
    <Box width={wrapperWidth}>
      <NumberInput
        value={value}
        min={1}
        color={mainColor}
        borderColor={borderColor}
        {...rest}
      >
        <NumberInputField />
        <NumberInputStepper width={'30px'}>
          <NumberIncrementStepper color={mainColor} borderColor={borderColor} />
          <NumberDecrementStepper color={mainColor} borderColor={borderColor} />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};

export default NumericInput;
