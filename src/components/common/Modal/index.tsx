import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FC, PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const Modal: FC<PropsWithChildren<Props>> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  const { mode, colorSet } = useContext(ThemeContext);

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg={mode === 'light' ? 'rgba(0,0,0, .1)' : 'rgba(255,255,255, .1)'}
        backdropFilter="blur(10px)"
      />
      <ModalContent
        backgroundColor={colorSet.background}
        color={colorSet.color}
      >
        <ModalHeader fontSize={'24px'} letterSpacing={0.15} fontWeight={700}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
