import MonitorInfo from './MonitorInfo';
import React from 'react';
import localData from './preview-print-test-data';

const ReportDetail: React.FC = () => {
  console.log(localData);
  return (
    <div id={'report-preview'}>
      <MonitorInfo localData={localData} />
    </div>
  );
};

export default ReportDetail;
