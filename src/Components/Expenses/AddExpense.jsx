import React, { useContext, useState } from 'react';
import BusinessIcon from '@mui/icons-material/Business';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import "./AddExpense.css"
import { addExpense } from '../../Data/expenses';
import { DataContext } from '../../Context/DataContext';
const AddExpense = () => {
    const navigate = useNavigate()
    const initialState = { name: "", amount: "", txdate: "", description: "" }
    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const { user } = useContext(DataContext)
    const [value, setValue] = useState(
        dayjs(Date.now()),
    );

    const handleDateChange = (newValue) => {
        setValue(newValue);
        setFormData({ ...formData, ["txdate"]: newValue })
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleDescriptionChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const post = {
            txdate: formData.txdate,
            name: formData.name,
            amount: formData.amount,
            description: formData.description,
            user_id: user.user.id
        }
        addExpense(post, setIsLoading, setErrors, navigate)
        console.log(post)
    }
    return (
        <div className='add-business container p-4 '>
            <h5 className='mb-3'>Add an Expense</h5>

            <hr className="light mb-3" />
            <p className="mb-4">Add an Expense</p>
            <Card className='p-3'>
                <form onSubmit={onSubmit}>
                    <label htmlFor="basic-url" className="form-label ">Name</label>
                    <div className="input-group mb-5">
                        <span className="input-group-text" id="basic-addon1"><BusinessIcon /></span>
                        <input type="text" onChange={handleChange} name="name" className="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <label htmlFor="basic-url" className="form-label ">Amount (Ksh)</label>
                    <div className="input-group mb-5">
                        <span className="input-group-text" id="basic-addon1"><BusinessIcon /></span>
                        <input type="text" onChange={handleChange} name="amount" className="form-control" placeholder="amount" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack className='mb-3' spacing={3}>
                            <label htmlFor="basic-url" className="form-label ">Transaction Date</label>

                            <DateTimePicker
                                label="Date&Time picker"
                                value={value}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                    <label htmlFor="basic-url" className="form-label ">Description</label>
                    <div className="input-group mb-3">
                        <textarea className="form-control" onChange={handleDescriptionChange} name='description' aria-label="With textarea"></textarea>
                    </div>

                    <div className="text-center mt-3">
                        {
                            isLoading ? <button className="btn btn-success btn-md" disabled>Adding</button> :
                                <button className="btn btn-success btn-md">Add Expense</button>
                        }

                    </div>

                </form>
            </Card>
        </div>
    )
}

export default AddExpense