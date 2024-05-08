import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';
import { BGCOLOR } from 'constants/color';
import React from 'react';

const AppLayout = ({ title, hideAvatar = false, children }) => {
  return (
    <VStack padding="24px" bgColor={BGCOLOR} height="100vh" gap="56px">
      <HStack width="100%" justify="space-between">
        <Text fontSize="3xl" fontWeight="700">
          {title}
        </Text>
        {!hideAvatar && <Avatar size="md" />}
      </HStack>
      <VStack width="100%" alignItems="flex-start">
        {children}
      </VStack>
    </VStack>
  );
};

export default AppLayout;
