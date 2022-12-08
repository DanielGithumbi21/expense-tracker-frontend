import React, { lazy, useContext, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import PrivateRoute from './PrivateRoute'
import Box from '@mui/material/Box';
import AppBar from '../Components/Appbar/AppBar';
import SideBar from '../Components/Sidebar/Sidebar';
import { styled, useTheme } from '@mui/material/styles';
import { DataContext } from '../Context/DataContext';
import CircularProgress from '@mui/material/CircularProgress';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const drawerWidth = 240;

const RoutesPage = () => {

    const AddExpense = lazy(() => import('../Components/Expenses/AddExpense'))
    const Dashboard = lazy(() => import('../Components/Dashboard/Dashboard'))
    const AddIncome = lazy(() => import('../Components/Incomes/AddIncome'))
    const ExpenseList = lazy(() => import('../Components/Expenses/ExpensesList'))
    const IncomesList = lazy(() => import('../Components/Incomes/IncomesList'))
    const ExpenseDetails = lazy(() => import('../Components/Expenses/ExpenseDetails'))
    const IncomeDetails = lazy(() => import('../Components/Incomes/IncomeDetails'))


    const theme = useTheme();

    const { open, loggedUser } = useContext(DataContext)

    return (
        <React.Fragment>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {
                    loggedUser && (
                        <>
                            <AppBar />
                            <SideBar />
                        </>

                    )
                }
                <Suspense fallback={
                    <div className="flex justify-center items-center mt-3">
                        <CircularProgress />
                    </div>
                }>

                    <Main open={open}>
                        <DrawerHeader />
                        <Routes>
                            <Route element={<PrivateRoute />}>
                                <Route path='/add-expenses' element={<AddExpense />} />
                                <Route path='/add-incomes' element={<AddIncome />} />
                                <Route path='/expenses' element={<ExpenseList />} />
                                <Route path='/expense/:id/details' element={<ExpenseDetails />} />
                                <Route path='/incomes' element={<IncomesList />} />
                                <Route path='/income/:id/details' element={<IncomeDetails />} />
                                <Route path='/' element={<Dashboard />} />
                            </Route>
                        </Routes>
                    </Main>
                </Suspense>
            </Box>

        </React.Fragment>
    )
}

export default RoutesPage