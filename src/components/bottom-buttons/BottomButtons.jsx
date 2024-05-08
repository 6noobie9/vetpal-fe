import { Button, HStack } from '@chakra-ui/react';
import { PRIMARY_COLOR, P_GRAY, P_WHITE } from 'constants/color';
import React from 'react';

const BottomButtons = () => {
  return (
    <HStack justify="space-between" width="100%">
      <Button bg={P_GRAY} width="132px">
        Back
      </Button>
      <Button bg={PRIMARY_COLOR} color={P_WHITE} width="132px">
        Next
      </Button>
    </HStack>
  );
};

export default BottomButtons;
