import React, { useState } from 'react'
import LoginPage from './LoginPage'
import SignBanner from './SignBanner'
import Signup from './Signup'
import "./Login.css"


const Login = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const switchMode = () => setIsSignup((prev) => !prev)
    const handleShowPassword = () => setShowPassword((prev) => !prev)
    return (
        <div className="container-fluid login">
            <img src="" alt="" />
            <div className="row padding">
                <div className="col-lg-6 col-sm-12">
                    <SignBanner />
                </div>
                <div className="col-lg-6 ">
                    <div className="sign-container">

                        {
                            isSignup ?
                                <div className="container">
                                    <div className="card login-card ">
                                        <Signup switchmode={switchMode} handleShowPassword={handleShowPassword} showPassword={showPassword} />

                                    </div>
                                </div> :
                                <div className="container">
                                    <div className="card login-card mt-5">

                                        <LoginPage switchmode={switchMode} handleShowPassword={handleShowPassword} showPassword={showPassword} />

                                    </div>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login