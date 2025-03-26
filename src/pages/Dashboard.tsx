import { DataGrid } from '@mui/x-data-grid';

const Dashboard = () => {
  const rows = [
    { id: 1, metric: 'Total Jobs Posted', value: 10 },
    { id: 2, metric: 'Total Proposals', value: 25 },
    { id: 3, metric: 'Active Contracts', value: 5 },
  ];

  const columns = [
    { field: 'metric', headerName: 'Metric', width: 200 },
    { field: 'value', headerName: 'Value', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Dashrd</h2>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Dashboard;
