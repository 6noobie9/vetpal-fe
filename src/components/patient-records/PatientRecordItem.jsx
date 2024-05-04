import { Card, HStack, Text, VStack } from '@chakra-ui/react';
import { BGCOLOR } from 'constants/color';
import React from 'react';

const PatientRecordItem = ({ name, disease, date }) => {
  return (
    <Card width="100%" bgColor={BGCOLOR} padding="12px">
      <VStack align="flex-start">
        <Text varint="body">{name}</Text>
        <HStack>
          <Text varint="body">{disease}</Text>
          <Text varint="body">{date}</Text>
        </HStack>
      </VStack>
    </Card>
  );
};

export default PatientRecordItem;
