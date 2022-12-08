import React, { useState, useEffect } from 'react'
import "../Expenses/AddExpense.css"
import { useNavigate, useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import AlertDialog from '../Dialog/Dialog';
import { deleteSingleIncome, getSingleIncome } from '../../Data/incomes';


const IncomeDetails = () => {
    const [open, setOpen] = useState(false)
    const options = { year: "numeric", month: "long", day: "numeric" }

    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [isLoading, setIsloading] = useState(false)


    const params = useParams()
    const handleDelete = () => {
        deleteSingleIncome(params.id, navigate, setIsloading)
        setOpen(false)
    }
    useEffect(() => {
        getSingleIncome(params.id, setData, setIsloading)


    }, [location]);
    const onDelete = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            {
                isLoading ? <div className="text-center"><CircularProgress color="success" /></div> :
                    <div className="container p-3">

                        {
                            open ? <AlertDialog open={open} handleClose={handleClose} title={data.name} handleDelete={handleDelete} /> : ""
                        }
                        <div className="row padding">
                            <div className="col-lg-6">
                                <h2 className='mb-4'>{data.name}</h2>

                            </div>

                        </div>
                        <div className="row padding mb-4">
                            <div className="col-lg-6">
                                <div className='details-button' style={{ display: "flex" }}>
                                    <button className='btn btn-secondary btn-md' onClick={(() => navigate(-1))}> Back</button>
                                    <button className='btn btn-danger btn-md' onClick={onDelete}> Delete</button>

                                </div>


                            </div>

                        </div>

                        <table className="table mt-3">

                            <>
                                <tbody >
                                    <tr >
                                        <th>Title</th>
                                        <td>{data.name}</td>
                                    </tr>

                                    <tr>
                                        <th>Amount</th>
                                        <td>{data.amount}</td>
                                    </tr>

                                    <tr>
                                        <th>Date</th>
                                        <td>{new Date(data.txdate).toLocaleDateString(undefined, options)}</td>
                                    </tr>
                                    <tr>
                                        <th>Description</th>
                                        <td>{data.description}</td>
                                    </tr>
                                </tbody>
                            </>


                        </table>

                    </div>
            }
        </>
    )
}

export default IncomeDetails