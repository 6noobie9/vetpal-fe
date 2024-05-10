import { Button, HStack } from '@chakra-ui/react';
import { PRIMARY_COLOR, P_GRAY, P_WHITE } from 'constants/color';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomButtons = ({ onNext, onBack }) => {
  const navigate = useNavigate();

  return (
    <HStack justify="space-between" width="100%">
      <Button bg={P_GRAY} width="132px" onClick={() => navigate(onBack)}>
        Back
      </Button>
      <Button bg={PRIMARY_COLOR} color={P_WHITE} width="132px" onClick={() => navigate(onNext)}>
        Next
      </Button>
    </HStack>
  );
};

export default BottomButtons;
