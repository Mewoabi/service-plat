import { DataGrid } from '@mui/x-data-grid';
import { proposals } from '../components/data/proposals';
import { jobs as profleJobs } from '../components/data/jobs';

const Proposals = () => {
  const getJobTitle = (jobId: string) => {
    const job = profleJobs.find(j => j.id === jobId);
    return job ? job.title : 'Unknown Job';
  };

  const rows = proposals.map(proposal => ({
    id: proposal.id,
    job: getJobTitle(proposal.jobId),
    status: proposal.status,
    bid: proposal.bidAmount,
    createdAt: proposal.createdAt.toLocaleDateString()
  }));

  const columns = [
    { field: 'job', headerName: 'Job Title', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'bid', headerName: 'Bid Amount ($)', width: 150 },
    { field: 'createdAt', headerName: 'Submitted', width: 150 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Proposals</h2>
      <DataGrid 
        rows={rows} 
        columns={columns}
      />
    </div>
  );
};

export default Proposals;
