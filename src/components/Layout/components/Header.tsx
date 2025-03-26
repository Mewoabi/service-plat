import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import MenuButton from './MenuButton';
import { useLocation } from 'react-router-dom';
import Search from './Search';
import { useUser } from '../../../contexts/userContext';
const menuContent: { [key: string]: string } = {
  "/": "Welcome",
  "/dashboard": "Dashboard",
  "/contracts": "Contracts",
  "/proposals": "Proposals",
  "/profile": "Profile",
};

export default function Header() {
  const location = useLocation();
  const pageTitle: string = menuContent[location.pathname] || "Dashboard";
  const { user } = useUser();

  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <Stack>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {pageTitle}
        </Typography>
        {user && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Hello, {user.email} ({user.role})
          </Typography>
        )}
      </Stack>
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
      </Stack>
    </Stack>
  );
}
