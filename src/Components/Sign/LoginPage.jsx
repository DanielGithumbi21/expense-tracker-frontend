import React, { useState, useContext } from 'react'
import "./Login.css"
import { TextField, InputAdornment, IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DataContext } from '../../Context/DataContext';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Data/Auth';

const LoginPage = ({ handleShowPassword, showPassword, switchmode }) => {
  const navigate = useNavigate()
  const initialState = { password: "", email: "" }
  const [formData, setFormData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const { setUser, setLoggedUser } = useContext(DataContext)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    login(formData, setUser, setIsLoading, setErrors, navigate, setLoggedUser)
  }
  return (
    <React.Fragment>
      {
        errors && (
          <p className="text-danger text-center mb-3">{errors}</p>
        )
      }
      <h3 className="mt-3 mb-5 text-center" >Sign In</h3>
      <form onSubmit={onSubmit} >
        <div className="field mb-3">
          <TextField id="outlined-basic" onChange={handleChange} label="Email" name="email" type="email" variant="filled" className="textfield mb-3" required />
        </div>

        <div className="mb-3 field">
          <TextField id="outlined-basic" onChange={handleChange} label="Password" type={showPassword ? 'text' : 'password'} name="password" required
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
        <div className="mt-3 text-center sign-button">
          <button className="btn btn-primary btn-md" disabled={isLoading ? true : false} >Sign In</button>

        </div>
      </form>
      <div className="text-center mt-3">
        <p>Don't have an account yet? <a href="#" onClick={switchmode}>Sign Up</a></p>
      </div>
    </React.Fragment>
  )
}

export default LoginPage