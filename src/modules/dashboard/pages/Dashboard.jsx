import AppLayout from 'components/app-layout/AppLayout';
import PatientRecords from 'components/patient-records/PatientRecords';
import React from 'react';

const Dashboard = () => {
  return (
    <AppLayout title="Dashboard">
      <PatientRecords />
    </AppLayout>
  );
};

export default Dashboard;
