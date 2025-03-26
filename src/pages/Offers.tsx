import { useState } from 'react';
import { DataGrid, GridRowId } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Table from '../components/Table';
import { useNavigate } from 'react-router-dom';
import { jobs as dataJobs } from '../components/data/jobs';

interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  status: string;
  numberOfSlots: number;
  acceptedSlots: number;
  createdAt: string;
}

const Offers = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>(dataJobs.map(job => ({
    ...job,
    createdAt: job.createdAt.toISOString()
  })) as Job[]);

  const columns = [
    { field: 'title', headerName: 'Job Title', width: 200 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'budget', headerName: 'Budget ($)', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    { 
      field: 'slots', 
      headerName: 'Slots', 
      width: 120,
      renderCell: (params: any) => `${params.row.acceptedSlots}/${params.row.numberOfSlots}`
    },
    { 
      field: 'createdAt', 
      headerName: 'Created', 
      width: 180,
      valueFormatter: (params: any) => new Date(params.value).toLocaleDateString()
    }
  ];

  const handleDelete = (id: GridRowId) => {
    // Implement delete logic
    console.log('Delete job:', id);
  };

  const handleEdit = (id: string) => {
    navigate(`/offers/edit/${id}`);
  };

  const handleView = (id: string) => {
    navigate(`/offers/${id}`);
  };

  const customActions = [
    {
      props: {
        icon: <VisibilityIcon />,
        label: 'View',
      },
      func: (id: any) => () => handleView(id)
    },
    {
      props: {
        icon: <EditIcon />,
        label: 'Edit',
      },
      func: (id: any) => () => handleEdit(id)
    }
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h2>My Job Offers</h2>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/offers/create')}
        >
          Create New Job
        </Button>
      </div>
      <Table
        rows={jobs}
        columns={columns}
        setRows={setJobs}
        customActions={customActions}
        deleting
        deleteFunction={handleDelete}
        height="500px"
      />
    </div>
  );
};

export default Offers;
