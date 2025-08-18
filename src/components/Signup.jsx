import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({
    name : '',
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
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`, data, {withCredentials:true})
      console.log(response?.data?.data)
      navigate('/signin')
      
    } catch (error) {
      console.log("Something went wrong, while signing up", error)
      alert("Cannot Signup")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data.name} name="name" onChange={handleOnChange} placeholder='Enter your name here' />
        <input type="email" value={data.email} name="email" onChange={handleOnChange} placeholder='Enter your email' />
        <input type="password" value={data.password} name="password" onChange={handleOnChange} placeholder='Enter your password' />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
