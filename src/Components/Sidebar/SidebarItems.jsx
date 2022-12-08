import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const drawerItems = [

    {
        name: 'Dashboard',
        Icon: DashboardIcon,
        link: "/"
    },
    {
        name: 'Expenses',
        Icon: AttachMoneyIcon,
        link: "/expenses"
    },
    {
        name: 'Incomes',
        Icon: AddCardIcon,
        link: "/incomes"
    },
    {
        name: 'Add Income',
        Icon: AddCircleIcon,
        link: "/add-incomes"
    },
    {
        name: 'Add Expenses',
        Icon: AddIcon,
        link: "/add-expenses"
    }
]
export { drawerItems }