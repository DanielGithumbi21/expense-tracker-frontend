import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Context/DataContext'
import "./Dashboard.css"
import CircularProgress from '@mui/material/CircularProgress';
import Charts from './Charts';
import { getExpenses } from '../../Data/expenses';
import { getIncomes } from '../../Data/incomes';
import { getSpendings } from '../../Data/spendings';

const Dashboard = () => {

    const { user } = useContext(DataContext)
    const [expenses, setExpenses] = useState([])
    const [incomes, setIncomes] = useState([])
    const [income, setIncome] = useState()
    const [budget, setBudget] = useState()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        getExpenses(user.user.id, setExpenses, setIsLoading)
        getIncomes(user.user.id, setIncomes, setIsLoading)
        getSpendings(user.user.id, setIncome, setBudget, setIsLoading)
    }, [])
    const totalExpenses = expenses.reduce(function (prev, cur) {
        return prev + cur.amount;
    }, 0);

    const totalIncomes = incomes.reduce(function (prev, cur) {
        return prev + cur.amount;
    }, 0);
    return (
        <>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :

                    <div className='container-fluid overview'>
                        <div className="text-right">
                        </div>
                        <div className="insights container">
                            <div className="row padding">
                                <div className="col-lg-3 mt-3">
                                    <div className="card text-center">
                                        <h5 className='mb-2 top-cards'><span className='money'>Ksh {budget}</span></h5>
                                        <h2>Amount Budgeted</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-3">
                                    <div className="card text-center">
                                        <h5 className='mb-2 top-cards'><span className='money'>Ksh {income}</span> </h5>
                                        <h2>Expected Income</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-3">
                                    <div className="card text-center">
                                        <h5 className='mb-2 top-cards'><span className='money'>Ksh {totalExpenses}</span></h5>
                                        <h2>Total expenses</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-3">
                                    <div className="card text-center">
                                        <h5 className='mb-2 top-cards'><span className='money'>Ksh {totalIncomes}</span></h5>
                                        <h2>Total Incomes</h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Charts income={income} budget={budget} totalExpenses={totalExpenses} totalIncomes={totalIncomes} />
                    </div>

            }
        </>

    )
}

export default Dashboard