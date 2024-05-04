import { Button, Card, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import PatientRecordItem from './PatientRecordItem';

const PatientRecords = () => {
  const [patientRecords, setPatientRecords] = useState();

  useEffect(() => {
    const fetchRecords = async () => {
      // call the api
      // store data  in state
      setPatientRecords([
        { id: 1, name: 'Billi', disease: 'Cough', date: '2021-01-01' },
        { id: 2, name: 'Billa', disease: 'Cold', date: '2021-01-01' },
        { id: 3, name: 'Bille', disease: 'Fever', date: '2021-01-01' },
        { id: 4, name: 'Billu', disease: 'Pain', date: '2021-01-01' },
      ]);
    };

    fetchRecords();
  }, []);

  return (
    <Card width="100%" padding="24px">
      <VStack>
        <HStack width="100%" justify="space-between">
          <Text variant="body">Patient Records</Text>
          <Button variant="link">See All</Button>
        </HStack>
        <VStack width="100%">
          {patientRecords.map((record) => (
            <PatientRecordItem
              key={record.id}
              name={record.name}
              date={record.date}
              disease={record.disease}
            />
          ))}
        </VStack>
      </VStack>
    </Card>
  );
};

export default PatientRecords;
