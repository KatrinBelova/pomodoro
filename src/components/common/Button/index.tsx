import { FC, PropsWithChildren, useContext } from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { ThemeContext } from '../../../context/ThemeContext';

import { convertHexToRGBA } from '../../../utils/convertHexToRgba';

type ButtonVariant = 'primary' | 'secondary';

interface Props extends ButtonProps {
  variant: ButtonVariant;
}

const Button: FC<PropsWithChildren<Props>> = ({
  variant,
  children,
  ...rest
}) => {
  const { colorSet } = useContext(ThemeContext);
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';

  const getColor = () => {
    const primaryColor = convertHexToRGBA(colorSet.primary, 62);
    const secondaryColor = convertHexToRGBA(colorSet.primary, 15);

    if (isPrimary) return primaryColor;
    if (isSecondary) return secondaryColor;
  };

  return (
    <ChakraButton variant={variant} background={getColor()} {...rest}>
      {children}
    </ChakraButton>
  );
};

export default Button;
