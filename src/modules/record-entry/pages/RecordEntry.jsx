import React from 'react';
import { Input, Select, Text, VStack } from '@chakra-ui/react';
import AppLayout from 'components/app-layout/AppLayout';
import BottomButtons from 'components/bottom-buttons/BottomButtons';

const RecordEntry = () => {
  return (
    <AppLayout title="New Record">
      <VStack width="100%" gap="184px">
        <VStack width="100%" gap="36px">
          <VStack width="100%" align="flex-start" gap="8px">
            <Text fontWeight="700">Name/ID</Text>
            <Input type="text" placeholder="Name/ID of Animal" />
          </VStack>
          <VStack width="100%" align="flex-start" gap="8px">
            <Text fontWeight="700">Select Animal Type</Text>
            <Select placeholder="Select Type of Animal">
              <option value="Kutta">Kutta</option>
              <option value="Bili">Bili</option>
              <option value="Bhalu">Bhalu</option>
            </Select>
          </VStack>
          <VStack width="100%" align="flex-start" gap="8px">
            <Text fontWeight="700">Select Animal Type</Text>
            <Select placeholder="Select Breed of Animal">
              <option value="Kutta">Kaala</option>
              <option value="Bili">Gora</option>
              <option value="Bhalu">Chota</option>
            </Select>
          </VStack>
        </VStack>
        <BottomButtons onNext="/disease-entry" onBack="/dashboard" />
      </VStack>
    </AppLayout>
  );
};

export default RecordEntry;
