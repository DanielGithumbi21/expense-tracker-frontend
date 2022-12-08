import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material"
import "./spendings.css"
import { DataContext } from '../../Context/DataContext';
import { addPlannedFinance } from '../../Data/spendings';
import { useNavigate } from 'react-router-dom';

const steps = [
    {
        label: 'Enter Your monthly Budget',
        name: `budget`,
    },
    {
        label: 'Enter your expected monthly income',
        name: `income`,
    },

];

export default function ExpectedIncome() {
    const navigate = useNavigate()
    const initialState = { budget: 0, income: 0 }
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = React.useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const { user, setLoggedUser } = useContext(DataContext)

    const onSubmit = (e) => {
        e.preventDefault()
        const post = {
            income: formData.income,
            budget: formData.budget,
            user_id: user.user.id
        }
        addPlannedFinance(post, setLoggedUser, setIsLoading, setErrors, navigate)
        console.log(post)

    }

    return (
        <Box className="container budget "  >
            {
                errors && (
                    <p className="text-center text-danger mb-3">{errors}</p>
                )
            }
            <h5 className="text-center mb-5">Welcome, {user.user.name}</h5>
            <Stepper activeStep={activeStep}  >
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <div className="mb-2 field">
                                <TextField onChange={handleChange} required id="outlined-basic" label={step.name} name={step.name} variant="filled" className="textfield mb-3" />
                            </div>

                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }} className="mt-3">
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <div className="text-center mt-3">
                        <button onClick={handleReset} className="btn btn-danger btn-md m-2">
                            Reset
                        </button>
                        <button onClick={onSubmit} className="btn btn-primary btn-md m-2" disabled={isLoading ? true : false} >
                            Continue
                        </button>
                    </div>

                </Paper>
            )}
        </Box>
    );
}
