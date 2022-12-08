import axios from "axios"
import { api } from "./Auth"


const addExpense = async (formData,setIsLoading,setErrors,navigate) => {
    setIsLoading(true)

    await axios.post(`${api}/expenses`,formData)
    .then((data) => {
        if (data.data.message) {
            setIsLoading(false)
            setErrors(data.data.message);
          } else {
            setIsLoading(false)
            navigate("/expenses")
          }
    })
}

const getExpenses = async (id,setData,setIsLoading) => {
      setIsLoading(true)
      await axios.get(`${api}/users/${id}/expenses`)
          .then((data) => setData(data.data))
          .then(() => setIsLoading(false))

}
  const getSingleExpense = async (id,setData,setIsLoading) => {
        setIsLoading(true)
        await axios.get(`${api}/expenses/${id}`)
            .then((data) => setData(data.data))
            .then(() => setIsLoading(false))
    }

    const deleteSingleExpense = async (id,navigate,setIsLoading) => {
      setIsLoading(true)
      await axios.delete(`${api}/expenses/${id}`)
          .then(() => navigate('/expenses'))
          .then(() => setIsLoading(false))
  }




export {addExpense,getSingleExpense,deleteSingleExpense,getExpenses}