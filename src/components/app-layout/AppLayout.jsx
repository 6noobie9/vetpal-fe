import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';
import { BGCOLOR } from 'constants/color';
import React from 'react';

const AppLayout = ({ title, children }) => {
  return (
    <VStack padding="24px" bgColor={BGCOLOR} height="100vh">
      <HStack width="100%" justify="space-between">
        <Text variant="body">{title}</Text>
        <Avatar />
      </HStack>
      <VStack width="100%" alignItems="flex-start">
        {children}
      </VStack>
    </VStack>
  );
};

export default AppLayout;
