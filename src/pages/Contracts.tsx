import { DataGrid } from '@mui/x-data-grid';
import { contracts } from '../components/data/contracts';
import { proposals } from '../components/data/proposals';
import { jobs } from '../components/data/jobs';

const Contracts = () => {
  const getJobDetails = (proposalId: string) => {
    const proposal = proposals.find(p => p.id === proposalId);
    if (proposal) {
      const job = jobs.find(j => j.id === proposal.jobId);
      return job ? {
        title: job.title,
        amount: proposal.bidAmount
      } : null;
    }
    return null;
  };

  const rows = contracts.map(contract => {
    const jobDetails = getJobDetails(contract.proposalId);
    return {
      id: contract.id,
      title: jobDetails?.title || 'Unknown Contract',
      status: contract.status,
      amount: contract.escrowAmount,
      createdAt: contract.createdAt.toLocaleDateString()
    };
  });

  const columns = [
    { field: 'title', headerName: 'Contract Title', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'amount', headerName: 'Amount ($)', width: 150 },
    { field: 'createdAt', headerName: 'Created', width: 150 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Contracts</h2>
      <DataGrid 
        rows={rows} 
        columns={columns}
      />
    </div>
  );
};

export default Contracts;
