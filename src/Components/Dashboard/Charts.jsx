import { Chart as ChartJS, registerables } from "chart.js";
import "./Dashboard.css"
import Card from '@mui/material/Card';
import {
    BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


ChartJS.register(...registerables);
const Charts = ({ income, totalExpenses, budget, totalIncomes }) => {

    const budgetAgainstIncome = [
        {
            name: "income",
            amount: income
        },
        {
            name: "budget",
            amount: budget
        },
    ]
    const budgetAgainstExpenses = [
        {
            name: "budget",
            amount: budget
        },
        {
            name: "Current Expenses",
            amount: totalExpenses
        },
    ]
    const currentIncomeAgainstCurrentExpenses = [
        {
            name: "Current Income",
            amount: totalIncomes
        },
        {
            name: "Current Expenses",
            amount: totalExpenses
        },
    ]

    const currentIncomeAgainstExpectedIncome = [
        {
            name: "Current Income",
            amount: totalIncomes
        },
        {
            name: "Expected Income",
            amount: income
        },
    ]




    return (

        <div >
            <div className="text-right">
            </div>

            <div className="container charts">
                <div className="row padding">
                    <div className="col-lg-6 col-sm-12">
                        <Card className=" new-card">
                            <h5 className="text-center mb-5">Expected income against budgeted income</h5>
                            <ResponsiveContainer width="95%" height={400}>
                                <BarChart

                                    data={budgetAgainstIncome}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 5,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="1 6" />
                                    <XAxis dataKey={`name`} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="amount" barSize={20} fill='#3282B8' />
                                </BarChart>
                            </ResponsiveContainer>

                        </Card>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Card className="new-card">
                            <h5 className="text-center mb-4">Budgeted Amount Against Current Expenses</h5>
                            <ResponsiveContainer width="95%" height={400}>
                                <ComposedChart
                                    layout="vertical"
                                    data={budgetAgainstExpenses}
                                    margin={{
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 20,
                                    }}
                                >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" scale="band" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="amount" barSize={20} fill='#3282B8' />
                                </ComposedChart>
                            </ResponsiveContainer>

                        </Card>
                    </div>
                </div>
                <div className="row padding">
                    <div className="col-lg-12 col-sm-12">
                        <Card className="Card new-card">
                            <h5 className="text-center mb-5">Current Income Against Expected Income</h5>
                            <ResponsiveContainer width="95%" height={400}>
                                <BarChart

                                    data={currentIncomeAgainstExpectedIncome}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="amount" barSize={20} fill='#3282B8' />
                                </BarChart>
                            </ResponsiveContainer>

                        </Card>
                    </div>

                </div>
                <div className="row padding">
                    <div className="col-lg-12 col-sm-12">
                        <Card className="Card new-card">
                            <h5 className="text-center mb-5">Current Income Against Current Expenses</h5>
                            <ResponsiveContainer width="95%" height={400}>
                                <BarChart
                                    data={currentIncomeAgainstCurrentExpenses}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="amount" barSize={20} fill='#3282B8' />
                                </BarChart>
                            </ResponsiveContainer>

                        </Card>

                    </div>
                </div>

            </div>

        </div>



    )
}

export default Charts