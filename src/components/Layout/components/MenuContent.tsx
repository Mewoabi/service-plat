import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import {  useLocation, useNavigate } from 'react-router-dom';

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, path: "/dashboard"},
  // { text: 'Analytics', icon: <AnalyticsRoundedIcon /> },
  {text: 'Offers', icon: <CategoryIcon />, path: "/offers"},
  {text: 'Proposals', icon: <InventoryIcon />, path: "/proposals"},
  {text: 'Contracts', icon: <ReceiptLongIcon />, path: "/contracts"},
  { text: 'Profile', icon: <PeopleRoundedIcon />, path: "/profile" },
  // { text: 'Tasks', icon: <AssignmentRoundedIcon /> },
];

// const secondaryListItems = [
//   { text: 'Settings', icon: <SettingsRoundedIcon /> },
//   { text: 'About', icon: <InfoRoundedIcon /> },
//   { text: 'Feedback', icon: <HelpRoundedIcon /> },
// ];

export default function MenuContent() {
  const location  = useLocation()

  const navigate = useNavigate()
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={item.path===location.pathname} onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Stack>
  );
}
