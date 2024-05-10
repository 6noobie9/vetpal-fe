import React from 'react';
import { Select, VStack, Text } from '@chakra-ui/react';
import AppLayout from 'components/app-layout/AppLayout';
import BottomButtons from 'components/bottom-buttons/BottomButtons';

const DiseaseEntry = () => {
  return (
    <AppLayout title="Disease Type">
      <VStack width="100%" gap="292px">
        <VStack width="100%" gap="36px">
          <VStack width="100%" align="flex-start" gap="8px">
            <Text fontWeight="700">Disease Type</Text>
            <Select placeholder="Select Type of Disease">
              <option value="respiratory">Respiratory</option>
              <option value="pulmonary">Pulmonary</option>
              <option value="gastrointestinal">Gastrointestinal</option>
            </Select>
          </VStack>

          <VStack width="100%" align="flex-start" gap="8px">
            <Text fontWeight="700">Disease</Text>
            <Select placeholder="Select Disease">
              <option value="pneumonia">Pneumonia</option>
              <option value="kennel-cough">Kennel Cough</option>
              <option value="chronic-bronchitis">Chronic Bronchitis</option>
            </Select>
          </VStack>
        </VStack>
        <BottomButtons onNext="" onBack="/new-record" />
      </VStack>
    </AppLayout>
  );
};

export default DiseaseEntry;
