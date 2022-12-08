import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import { DataContext } from '../../Context/DataContext';
import { getExpenses } from '../../Data/expenses';


const ExpenseList = () => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { user } = useContext(DataContext)

    useEffect(() => {
        getExpenses(user.user.id, setData, setIsLoading)
    }, [])
    const onClick = (id) => {
        navigate(`/expense/${id}/details`)
    }

    return (
        <>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
                    <div className='container p-3'>
                        <input className="form-control search mb-3" type="search" placeholder="Search by location" aria-label="Search"></input>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>

                                </tr>
                            </thead>
                            {
                                data.map((expense) => (
                                    <tbody>
                                        <tr>
                                            <td>{new Date(expense.txdate).toLocaleDateString(undefined, options)}</td>
                                            <td>{expense.name}</td>
                                            <td>{expense.amount}</td>
                                            <td>{expense.description}</td>

                                            <td>
                                                <div style={{ display: "flex" }}>
                                                    <button className="btn btn-warning btn-sm " onClick={(() => { onClick(expense.id) })}>View</button>
                                                </div>

                                            </td>

                                        </tr>

                                    </tbody>
                                ))
                            }

                        </table>
                    </div>
            }
        </>

    )
}

export default ExpenseList