import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        email : '',
        password : ''
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setData((preve) => ({
            ...preve,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, data, {withCredentials : true})
            console.log(response)
            setData(response?.data?.data)
            navigate("/dashboard")
        } catch (error) {
            console.log("Something went wrong, while signing in", error)
            alert("Cannot Signin")
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      
        <input type="text" name='email' value={data.email} onChange={handleOnChange} placeholder='Enter Your Email' />
        <input type="password" name='password' value={data.password} onChange={handleOnChange} placeholder='Enter Your Password' />
        <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default Signin
