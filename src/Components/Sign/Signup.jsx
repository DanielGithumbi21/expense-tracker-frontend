import React, { useContext, useState } from 'react'
import { TextField, InputAdornment, IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import "./Login.css"
import { register } from '../../Data/Auth';
import { DataContext } from '../../Context/DataContext';
import { useNavigate } from 'react-router-dom';


const Signup = ({ handleShowPassword, showPassword, switchmode }) => {
    const navigate = useNavigate()
    const initialState = { name: "", password: "", email: "" }
    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const { setUser } = useContext(DataContext)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        register(formData, setUser, setIsLoading, setErrors, navigate)
    }
    return (
        <React.Fragment>
            {
                errors && (
                    <p className='text-danger mb-3 mt-3 text-center'>{errors}</p>
                )
            }
            <h5 className="mt-2 mb-3 text-center ">Create an Account</h5>

            <form onSubmit={onSubmit} >
                <div className="mb-2 field">
                    <TextField id="outlined-basic" label="Name" variant="filled" name='name' onChange={handleChange} className="textfield mb-3" />
                </div>

                <div className="mb-2 field">
                    <TextField id="outlined-basic" label="email" variant="filled" name="email" onChange={handleChange} className="textfield mb-3" />
                </div>
                <div className="mb-2 field">
                    <TextField id="outlined-basic" label="Password" name="password" onChange={handleChange} type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        {
                                            showPassword ? <VisibilityOff onClick={handleShowPassword} /> : <Visibility onClick={handleShowPassword} />
                                        }

                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        variant="filled" className="textfield mb-3" />
                </div>
                <div className="text-center mt-3 sign-button">

                    <button className="btn btn-primary btn-md" disabled={isLoading ? true : false} >Register</button>



                </div>
                <div className="text-center mt-3">
                    <p>Already have an account? <a href="#" onClick={switchmode}  >Sign In</a></p>
                </div>

            </form>
        </React.Fragment>
    )
}

export default Signup