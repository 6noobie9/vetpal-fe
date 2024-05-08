import { Button } from '@chakra-ui/react';
import AppLayout from 'components/app-layout/AppLayout';
import PatientRecords from 'components/patient-records/PatientRecords';
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// const newRecord = () => {
//   navigate('/RecordEntry');
// };
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <AppLayout title="Dashboard">
      <PatientRecords />
      <Button
        width="100%"
        variant="outline"
        colorScheme="green"
        color="green"
        padding="24px"
        leftIcon={<FiPlusCircle />}
        onClick={() => navigate('/new-record')}
      >
        Add New Record
      </Button>
    </AppLayout>
  );
};

export default Dashboard;
