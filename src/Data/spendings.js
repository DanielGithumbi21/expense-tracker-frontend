import { api } from "./Auth"
import axios from "axios"

const addPlannedFinance = async (formData,setLoggedUser,setIsLoading,setErrors,navigate) => {
    setIsLoading(true)

    await axios.post(`${api}/spendings`,formData)
    .then(() => {
        setLoggedUser(true)
    })
    .then(() => {
      navigate("/")
    })
    .catch((err) => setErrors(err))
}

const getSpendings = async (id,setIncome,setBudget,setIsLoading) => {
      setIsLoading(true)
      await axios.get(`${api}/users/${id}/spendings`)
          .then((data) => {
              setIncome(data.data.income)
              setBudget(data.data.budget)
          })
          .then(() => setIsLoading(false))

}


export {addPlannedFinance,getSpendings}