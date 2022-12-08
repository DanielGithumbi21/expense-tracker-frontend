import axios from "axios"
import { api } from "./Auth"


const addIncome = async (formData,setIsLoading,setErrors,navigate) => {
    setIsLoading(true)

    await axios.post(`${api}/incomes`,formData)
    .then((data) => {
        if (data.data.message) {
            setIsLoading(false)
            setErrors(data.data.message);
          } else {
            setIsLoading(false)
            navigate("/incomes")
          }
    })
}

const getSingleIncome = async (id,setData,setIsLoading) => {
  setIsLoading(true)
  await axios.get(`${api}/incomes/${id}`)
      .then((data) => setData(data.data))
      .then(() => setIsLoading(false))
}
const getIncomes = async (id,setData,setIsLoading) => {
      setIsLoading(true)
      await axios.get(`${api}/users/${id}/incomes`)
          .then((data) => setData(data.data))
          .then(() => setIsLoading(false))

}


const deleteSingleIncome = async (id,navigate,setIsLoading) => {
setIsLoading(true)
await axios.delete(`${api}/incomes/${id}`)
    .then(() => navigate('/incomes'))
    .then(() => setIsLoading(false))
}

export {addIncome, getSingleIncome,deleteSingleIncome,getIncomes}