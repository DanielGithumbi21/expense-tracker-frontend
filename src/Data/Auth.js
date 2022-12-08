const api = "http://localhost:3000"

import axios from "axios"

const register = async (formData,setUser,setIsLoading,setErrors,navigate) => {
    setIsLoading(true)

    await axios.post(`${api}/signup`,formData)
    .then((data) => {
        if (data.data.message) {
            setIsLoading(false)
            setErrors(data.data.message);
          } else {
            setIsLoading(false)
            setUser(data.data)
            navigate("/expected-spendings")
          }
    })
}

const login = async (formData,setUser,setIsLoading,setErrors,navigate,setLoggedUser) => {
    setIsLoading(true)

    await axios.post(`${api}/login`,formData)
    .then((data) => {
        if (data.data.message) {
            setIsLoading(false)
            setErrors(data.data.message);
          } else {
            setIsLoading(false)
            setUser(data.data)
            setLoggedUser(true)
            navigate("/")
          }
    })
}

export {api,register,login}