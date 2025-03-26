import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Paper
} from '@mui/material';

const categories = ['tech', 'creative', 'service'];

interface JobFormData {
  title: string;
  description: string;
  category: string;
  budget: number;
  numberOfSlots: number;
}

const JobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    description: '',
    category: 'tech',
    budget: 0,
    numberOfSlots: 1
  });

  useEffect(() => {
    if (id) {
      // Fetch job data if editing
      // setFormData(fetchedJob);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
    navigate('/offers');
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        {id ? 'Edit Job' : 'Create New Job'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Job Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          margin="normal"
          multiline
          rows={4}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            label="Category"
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          type="number"
          label="Budget ($)"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          type="number"
          label="Number of Slots"
          value={formData.numberOfSlots}
          onChange={(e) => setFormData({ ...formData, numberOfSlots: Number(e.target.value) })}
          margin="normal"
          required
          inputProps={{ min: 1 }}
        />
        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button variant="contained" type="submit">
            {id ? 'Update Job' : 'Create Job'}
          </Button>
          <Button variant="outlined" onClick={() => navigate('/offers')}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default JobForm;
